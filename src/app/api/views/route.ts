import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const viewsFilePath = join(process.cwd(), 'data', 'views.json');

async function ensureDataFile() {
  await mkdir(dirname(viewsFilePath), { recursive: true });

  try {
    await readFile(viewsFilePath, 'utf-8');
  } catch {
    await writeFile(viewsFilePath, JSON.stringify({ count: 0 }, null, 2));
  }
}

async function getViews() {
  await ensureDataFile();

  try {
    const file = await readFile(viewsFilePath, 'utf-8');
    const data = JSON.parse(file) as { count?: number };
    return typeof data.count === 'number' ? data.count : 0;
  } catch {
    return 0;
  }
}

async function saveViews(count: number) {
  await ensureDataFile();
  await writeFile(viewsFilePath, JSON.stringify({ count }, null, 2));
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
