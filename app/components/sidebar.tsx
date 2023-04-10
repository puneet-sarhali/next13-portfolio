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
    <nav className="flex flex-col w-fit h-screen text-neutral-400 font-light py-16 px-8 border-r border-neutral-800">
      <div>
        <a className="text-neutral-400 text-2xl flex flex-col">
          Puneet <br /> Sandhu
          <span className="text-blue-500 font-medium text-xs">
            Software Engineer
          </span>
        </a>
      </div>
      <p className="max-w-[9rem] text-xs mt-16">
        4th year Software Systems student at Simon Fraser University, BC,
        Canada.
      </p>
      <a className="flex mt-16 text-neutral-400 text-sm">
        <DiGithubBadge className="text-xl mr-2 mb-2 text-gray-500" />
        Github
      </a>
      <a className="flex text-neutral-400 text-sm">
        <CiLinkedin className="text-xl mr-2 text-gray-500" />
        LinkedIn
      </a>
      <a className="flex text-neutral-400 text-sm mt-16">
        <BiDownload className="text-xl mr-2 text-gray-500" />
        Resume
      </a>
    </nav>
  );
}
