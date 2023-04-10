import {
  SiAngular,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiOpenai,
} from "react-icons/si";

export default function featuredProject() {
  return (
    <div className="flex flex-col relative text-neutral-500 border border-neutral-800 bg-neutral-850 hover:bg-neutral-900 transition-all duration-1000  w-fit h-full p-6 rounded-lg pr-16">
      {/* <p className="text-xxs text-blue-400  mb-2 bg-blue-900 w-fit px-2 py-0.5 rounded-full">
        featured project
      </p> */}
      <h2 className="mb-2 mt-24 text-neutral-300">aicolors.co</h2>
      <ul className="flex space-x-2 text-neutral-500">
        <li>
          <SiAngular className="text-lg"></SiAngular>
        </li>
        <li>
          <SiTailwindcss className="text-lg"></SiTailwindcss>
        </li>
        <li>
          <SiPostgresql className="text-lg"></SiPostgresql>
        </li>
        <li>
          <SiSupabase className="text-lg"></SiSupabase>
        </li>
        <li>
          <SiOpenai className="text-lg"></SiOpenai>
        </li>
      </ul>
      <p className="text-neutral-500 text-xs mt-8 max-w-xs">
        AI Colors is a color palette generator that uses OpenAI&apos;s GPT-3.5
        API to generate color palettes based on a user&apos;s input.
      </p>
      <div className="mt-4">
        <h3 className="text-xxs ">Visitors this month</h3>
        <p className="text-sm text-gray-400">8640</p>
      </div>
      <div className="flex space-x-4 mt-8 align-bottom">
        <button className="text-blue-200 bg-blue-900 text-xxs w-24 h-7 text-center rounded-lg">
          Visit site
        </button>
        <button className="text-neutral-400 border border-neutral-700 text-xxs w-24 h-7 text-center rounded-lg">
          View source
        </button>
      </div>
    </div>
  );
}
