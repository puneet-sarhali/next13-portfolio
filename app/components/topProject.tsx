import { SiNextdotjs, SiTailwindcss, SiOpenai } from "react-icons/si";
export default function topProjects() {
  return (
    <div className="relative text-neutral-500 border border-neutral-800 bg-neutral-850 hover:bg-neutral-900 transition-all duration-1000 w-fit h-fit p-6 rounded-lg pr-16">
      <h2 className="mb-2 mt-6 text-xs text-neutral-300">
        Itinerary Generator
      </h2>
      <ul className="flex space-x-2 text-neutral-500">
        <li>
          <SiNextdotjs className="text-lg"></SiNextdotjs>
        </li>
        <li>
          <SiTailwindcss className="text-lg"></SiTailwindcss>
        </li>
        <li>
          <SiOpenai className="text-lg"></SiOpenai>
        </li>
      </ul>
      <p className="text-neutral-500 text-xs mt-8 max-w-xs">
        Using Next13 as a meta react framework, It generates an itinerary based
        on the user&apos;s input.
      </p>
      <div className="flex space-x-4 mt-4">
        <button className="text-neutral-200 bg-neutral-900 border border-neutral-700 text-xxs w-24 h-7 text-center rounded-lg">
          Visit site
        </button>
        <button className="text-neutral-400 border border-neutral-700 text-xxs w-24 h-7 text-center rounded-lg">
          View source
        </button>
      </div>
    </div>
  );
}
