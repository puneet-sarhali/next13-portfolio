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

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});
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

            <TopProjects />
            <TopProjects />
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
