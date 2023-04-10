import { Montserrat } from "next/font/google";
import Sidebar from "./components/sidebar";
import FeaturedProject from "./components/featuredProject";
import TopProjects from "./components/topProject";
import Contact from "./components/contact";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className={montserrat.className}>
      <div className="flex">
        <Sidebar />
        <div className="grid grid-cols-2 mt-16 ml-8 h-fit gap-4 pr-8 border-r border-neutral-800">
          <div className="row-span-2">
            <FeaturedProject />
          </div>

          <TopProjects />
          <TopProjects />
        </div>
        <Contact></Contact>
      </div>
    </main>
  );
}
