import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

export const dynamic = 'force-dynamic';

const primaryFilePath = join(process.cwd(), 'data', 'views.json');
const tmpFilePath = join('/tmp', 'david_cv_views.json');

let inMemoryViews: number | null = null;

async function getViews(): Promise<number> {
  if (inMemoryViews !== null) {
    return inMemoryViews;
  }

  // Try reading from /tmp first (holds latest serverless writes)
  try {
    const file = await readFile(tmpFilePath, 'utf-8');
    const data = JSON.parse(file) as { count?: number };
    if (typeof data.count === 'number') {
      inMemoryViews = data.count;
      return inMemoryViews;
    }
  } catch {
    // Fallback to primary
  }

  // Fallback to project file
  try {
    const file = await readFile(primaryFilePath, 'utf-8');
    const data = JSON.parse(file) as { count?: number };
    if (typeof data.count === 'number') {
      inMemoryViews = data.count;
      return inMemoryViews;
    }
  } catch {
    // Fallback to 0
  }

  inMemoryViews = 0;
  return inMemoryViews;
}

async function saveViews(count: number): Promise<void> {
  inMemoryViews = count;
  const payload = JSON.stringify({ count }, null, 2);

  // Try writing to primary project file (local development)
  try {
    await mkdir(dirname(primaryFilePath), { recursive: true });
    await writeFile(primaryFilePath, payload);
    return;
  } catch {
    // Primary path may be read-only on serverless hosts like Vercel
  }

  // Try writing to /tmp
  try {
    await writeFile(tmpFilePath, payload);
  } catch {
    // Retain in memory
  }
}

export async function GET() {
  const views = await getViews();
  return Response.json({ views });
}

export async function POST() {
  const currentViews = await getViews();
  const nextViews = currentViews + 1;

  await saveViews(nextViews);
  return Response.json({ views: nextViews });
}
