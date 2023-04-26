import { MdAccountCircle } from "react-icons/md";

export default function About() {
  return (
    <div className="mt-36 relative">
      {/* <div className="bg-neutral-800 p-2 mb-6 rounded-full border border-neutral-700 w-fit">
            <MdAccountCircle className="text-neutral-300 "></MdAccountCircle>
          </div>
          <h2 className="text-neutral-300 text-md">Bio</h2>
          <p className="text-xs text-neutral-500 mb-4">
            Little bit about me
          </p> */}

      <div className="">
        {/* <h1 className="text-neutral-500 text-3xl mb-2">Building minimalistic, user-centric and responsive websites</h1> */}
        <a className="text-xl">
          <span className="text-xs text-white bg-blue-700 px-4 py-1 rounded-full">
            ----- &nbsp;software developer / designer
          </span>
        </a>
        {/* <p className=" text-neutral-500  text-xs">
          CS student at Simon Fraser University, Canada
        </p> */}
        <p className="max-w-[50rem] text-4xl sm:text-5xl font-medium mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
          Crafting minimalistic user-centered websites with maximum impact.
        </p>

        {/* <p className="text-neutral-500 text-xs tracking-wide">
          Using my proficiencies in web development technologies to design and
          build <span className="text-neutral-300">clean</span>, <span className="text-neutral-300">responsive</span> and <span className="text-neutral-300">efficient</span> websites.
        </p> */}
      </div>
    </div>
  );
}
