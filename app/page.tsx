import { Montserrat } from "next/font/google";
import Sidebar from "./components/sidebar";
import FeaturedProject from "./components/featuredProject";
import TopProjects from "./components/topProject";
import Contact from "./components/contact";
import FetchGithub from "./components/fetchGithub";

import { MdWorkOutline } from "react-icons/md";
import Stack from "./components/stack";
import About from "./components/about";
import Footer from "./components/footer";

import {
  SiAngular,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiGooglecloud,
  SiReactivex,
  SiTailwindcss,
} from "react-icons/si";
import { Project } from "@/types";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const projectData: Project[] = [
  {
    title: "Open Collab",
    description:
      "A Reddit-style collaborative platform for open source developers to explore projects and find collaborators.",
    stack: [
      <SiAngular key={"angular"} />,
      <SiPostgresql key={"postgres"} />,
      <SiTypescript key={"ts"} />,
      <SiGooglecloud key={"gcp"} />,
      <SiReactivex key={"rxjs"} />,
    ],
    githubUrl: "https://github.com/puneet-sarhali/open-collab",
  },
  {
    title: "Portfolio",
    description:
      "Portfolio project built with Next.js 13, featuring server-side rendering for optimized performance and a seamless user experience.",
    stack: [
      <SiNextdotjs key={"nextjs"} />,
      <SiTailwindcss key={"tailwind"} />,
      <SiTypescript key={"ts"} />,
    ],
    githubUrl: "https://github.com/puneet-sarhali/next13-portfolio",
  },
];

export default function Home() {
  return (
    <main
      className={`${montserrat.className} flex justify-center items-center h-full`}
    >
      <div className="flex max-w-[74rem] h-full">
        <div className="flex flex-col h-full min-h-screen sm:mx-16 md:mx-24  mx-8 ">
          <Sidebar />
          <About></About>
          <Stack></Stack>

          {/* PROJECTS SECTION STARTS */}
          <div className="bg-neutral-800 p-2 mb-6 mt-24 rounded-full border border-neutral-700 w-fit">
            <MdWorkOutline className="text-neutral-300 "></MdWorkOutline>
          </div>
          <h2 className="text-neutral-200 text-lg">Featured Projects</h2>
          <p className="text-sm text-neutral-500 mb-4">
            Some of my latest web development projects
          </p>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="row-span-2 col-span-1 md:col-span-2 lg:col-span-1 ">
              <FeaturedProject />
            </div>

            {projectData.map((project) => (
              <TopProjects key={project.githubUrl} projectData={project} />
            ))}

            {/* <TopProjects />
            <TopProjects /> */}
          </div>

          <div className="mb-8">
            {/* @ts-expect-error Server Component */}
            <FetchGithub />
          </div>

          {/* PROJECTS SECTION ENDS */}
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </main>
  );
}
