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
    <nav className="flex items-center w-full text-neutral-400 font-light mb-16 mt-10">
      <div>
        <a className="text-neutral-400 text-2xl flex flex-col">
          Puneet Sandhu
          <span className="text-blue-600 font-medium text-xs">
            Software Engineer
          </span>
        </a>
      </div>
      <div className="ml-auto flex gap-4">
        <a className="flex text-neutral-400 text-sm">
          <DiGithubBadge className="text-xl mr-1 text-gray-500" />
          Github
        </a>
        <a className="flex text-neutral-400 text-sm">
          <CiLinkedin className="text-xl mr-1 text-gray-500" />
          LinkedIn
        </a>
        <a className="flex text-neutral-400 text-sm">
          <BiDownload className="text-xl mr-1 text-gray-500" />
          Resume
        </a>
      </div>
    </nav>
  );
}
