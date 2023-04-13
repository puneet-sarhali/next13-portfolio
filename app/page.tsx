import { Montserrat } from "next/font/google";
import Sidebar from "./components/sidebar";
import FeaturedProject from "./components/featuredProject";
import TopProjects from "./components/topProject";
import Contact from "./components/contact";
import FetchGithub from "./components/fetchGithub";

import { MdWorkOutline } from "react-icons/md";
import Stack from "./components/stack";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main
      className={`${montserrat.className} flex justify-center items-center h-full`}
    >
      <div className="flex max-w-[65rem] h-full">
        <div className="flex flex-col mx-8 h-full min-h-screen px-16 border-x border-neutral-800">
          <Sidebar />
          <div className="mb-8">
            {/* @ts-expect-error Server Component */}
            <FetchGithub />
          </div>
          {/* PROJECTS SECTION STARTS */}
          <div className="bg-neutral-800 p-2 mb-6 mt-8 rounded-full border border-neutral-700 w-fit">
            <MdWorkOutline className="text-neutral-300 "></MdWorkOutline>
          </div>
          <h2 className="text-neutral-300 text-xs">Featured Projects</h2>
          <p className="text-xxs text-neutral-500 mb-4">
            Some of my latest web development projects
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2">
              <FeaturedProject />
            </div>

            <TopProjects />
            <TopProjects />
          </div>
          <Stack></Stack>
          {/* PROJECTS SECTION EDS */}
          {/* <Contact></Contact> */}
        </div>
      </div>
    </main>
  );
}
