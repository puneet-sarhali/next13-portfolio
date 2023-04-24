import { MdAccountCircle } from "react-icons/md";



export default function About() {
  return (
    <div className="mt-16 relative">
          {/* <div className="bg-neutral-800 p-2 mb-6 rounded-full border border-neutral-700 w-fit">
            <MdAccountCircle className="text-neutral-300 "></MdAccountCircle>
          </div>
          <h2 className="text-neutral-300 text-md">Bio</h2>
          <p className="text-xs text-neutral-500 mb-4">
            Little bit about me
          </p> */}
      <svg 
      className="absolute top-0 left-0 -z-10 overflow-hidden opacity-20 transition-all duration-1000"
      xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="pattern_1VIMX" patternUnits="userSpaceOnUse" width="9.5" height="9.5" patternTransform="rotate(45)">
            <line x1="0" y="0" x2="0" y2="9.5" stroke="#808080" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern_1VIMX)" opacity="1" />
      </svg>
      <div className="border border-neutral-800 p-8 rounded-md">
          <h1 className="text-neutral-500 text-3xl mb-2">Building minimalistic, user-centric and responsive websites</h1>
        <p className=" text-neutral-500  text-xs flex flex-col ordinal">
          4th year Software Systems student at Simon Fraser University
        </p>
        <p className="mb-3 text-neutral-500 text-sm">Vancouver, Canada</p>
        
        {/* <p className="text-neutral-500 text-xs tracking-wide">
          Using my proficiencies in web development technologies to design and
          build <span className="text-neutral-300">clean</span>, <span className="text-neutral-300">responsive</span> and <span className="text-neutral-300">efficient</span> websites.
        </p> */}
      </div>
    </div>
  );
}
