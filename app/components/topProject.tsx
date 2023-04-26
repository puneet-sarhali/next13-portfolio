import { SiNextdotjs, SiTailwindcss, SiOpenai } from "react-icons/si";
export default function topProjects() {
  return (
    <div className="relative text-neutral-500 border border-neutral-900 bg-gradient-950 hover:bg-neutral-850 transition-all duration-700 w-full h-full p-6 rounded-lg pr-16">
      <h2 className="mb-2 pt-16 text-md text-neutral-200">
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
      <p className="text-neutral-500 text-sm mt-6 max-w-xs">
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
