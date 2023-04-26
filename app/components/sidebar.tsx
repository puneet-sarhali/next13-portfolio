import { Righteous } from "next/font/google";
import { DiGithubBadge } from "react-icons/di";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
const font = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export default function Sidebar() {
  return (
    <nav className="flex items-center w-full text-neutral-300 font-light mt-4 border-b border-neutral-850 pb-4">
      <div>
        <h1 className="text-neutral-300 sm:text-lg text-sm">
          <span className="mr-2">❑</span> Puneet Sandhu
          {/* Puneet Sandhu
          <span className="text-blue-600 font-medium text-xs ml-0.5">
            Software Developer
          </span> */}
        </h1>
      </div>
      <div className="ml-auto flex gap-4">
        <Link
          href="https://github.com/puneet-sarhali"
          target={"_blank"}
          className="flex text-neutral-300 text-sm items-center"
        >
          <DiGithubBadge className="text-2xl mr-1 text-gray-500" />
          <span className="hidden sm:block">Github</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/sarhali/"
          target={"_blank"}
          className="flex text-neutral-300 text-sm items-center"
        >
          <CiLinkedin className="text-2xl mr-1 text-gray-500" />
          <span className="hidden sm:block">LinkedIn</span>
        </Link>
        {/* <a className="flex text-neutral-400 text-xs items-center">
          <BiDownload className="text-xl mr-1 text-gray-500" />
          Resume
        </a> */}
      </div>
    </nav>
  );
}
