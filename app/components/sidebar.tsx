import { Righteous } from "next/font/google";
import { DiGithubBadge } from "react-icons/di";
import { CiLinkedin } from "react-icons/ci";
import { BiDownload } from "react-icons/bi";
const font = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export default function Sidebar() {
  return (
    <nav className="flex items-center w-full text-neutral-400 font-light mt-10 border-b border-neutral-850 pb-4">
      <div>
        <a className="text-neutral-400 text-md sm:text-lg flex flex-col">
          Puneet Sandhu
          <span className="text-blue-600 font-medium text-xs ml-0.5">
            Software Engineer
          </span>
        </a>
      </div>
      <div className="ml-auto flex gap-4">
        <a className="flex text-neutral-400 text-xs items-center">
          <DiGithubBadge className="text-2xl mr-1 text-gray-500" />
          <span className="hidden sm:block">Github</span>
        </a>
        <a className="flex text-neutral-400 text-xs items-center">
          <CiLinkedin className="text-2xl mr-1 text-gray-500" />
          <span className="hidden sm:block">LinkedIn</span>
        </a>
        {/* <a className="flex text-neutral-400 text-xs items-center">
          <BiDownload className="text-xl mr-1 text-gray-500" />
          Resume
        </a> */}
      </div>
    </nav>
  );
}
