"use client";

import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  short_description: string;
  slug: string;
  screenshots: string[];
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-800 bg-[#18181B] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-48 w-full bg-gray-900">
          <Image
            src={project.screenshots[0]}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h2 className="text-lg font-semibold text-white">{project.title}</h2>

          <p className="mt-2 text-sm font-medium leading-relaxed text-gray-400">
            {project.short_description}
          </p>

          <div className="mt-4">
            <span className="text-gray-400 transition-colors hover:text-gray-300">
              Learn More...
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
