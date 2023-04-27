import { Project } from "@/types";
import Link from "next/link";
import { SiNextdotjs, SiTailwindcss, SiOpenai } from "react-icons/si";
export default function topProjects({ projectData }: { projectData: Project }) {
  return (
    <div className="relative text-neutral-500 border border-neutral-900 bg-gradient-950 hover:bg-neutral-850 transition-all duration-700 w-full h-full p-6 rounded-lg pr-16">
      <h2 className="mb-2 pt-16 text-md text-neutral-200">
        {projectData.title}
      </h2>
      <ul className="flex space-x-2 text-neutral-500">
        {projectData.stack.map((stack) => {
          // eslint-disable-next-line react/jsx-key
          return <li className="text-lg">{stack}</li>;
        })}
      </ul>
      <p className="text-neutral-500 text-sm font-light mt-6 max-w-xs">
        {projectData.description}
      </p>
      <div className="flex space-x-4 mt-4">
        {/* <button className="text-neutral-200 bg-neutral-900 border border-neutral-700 text-xxs w-24 h-7 text-center rounded-lg">
          Visit site
        </button> */}
        <Link
          href={projectData.githubUrl}
          target="_blank"
          className="text-neutral-400 z-10 border border-neutral-700 text-xs px-6 py-2 text-center rounded-lg"
        >
          source
        </Link>
      </div>
    </div>
  );
}
