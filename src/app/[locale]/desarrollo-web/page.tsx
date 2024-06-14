import Project from '@/app/components/ui/project';
import { useTranslations } from 'next-intl';

const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: "",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: "",
  },
};

const EXAMPLE_PROJECTS = [
  {
    title: "Ejemplo de Proyecto 1",
    description:
      "Descripción del proyecto 1. Utiliza Next.js y Tailwind CSS para...",
    link: "https://example.com/proyecto-1",
    github: "https://github.com/ejemplo/proyecto-1",
    image: "/images/proyecto-1.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "Ejemplo de Proyecto 2",
    description:
      "Descripción del proyecto 2. Utiliza Next.js y Tailwind CSS para...",
    link: "https://example.com/proyecto-2",
    github: "https://github.com/ejemplo/proyecto-2",
    image: "/images/proyecto-2.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
];

export default function Home() {
  const t = useTranslations('nav');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 bg-white text-black">
      <Project projects={EXAMPLE_PROJECTS} tags={TAGS} />
    </main>
  );
}
