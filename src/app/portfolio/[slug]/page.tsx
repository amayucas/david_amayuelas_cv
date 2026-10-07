import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { ProjectDetail } from '@/components/portfolio';
import { projects, getProjectBySlug } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const projectTitle = typeof project.title === 'string' ? project.title : project.title.es;
  const projectDesc = typeof project.description === 'string' ? project.description : project.description.es;

  return {
    title: `${projectTitle} | Portfolio`,
    description: projectDesc,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container size="lg" className="py-12">
      <ProjectDetail project={project} />
    </Container>
  );
}
