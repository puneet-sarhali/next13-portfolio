import {
  SiAngular,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiOpenai,
} from "react-icons/si";

export default function featuredProject() {
  return (
    <>
      <div className="flex flex-col relative text-neutral-500 border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 transition-all duration-500 w-full h-full p-6 rounded-lg pr-16">
        {/* <p className="text-xxs text-blue-400  mb-2 bg-blue-900 w-fit px-2 py-0.5 rounded-full">
        featured project
      </p> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
          className="absolute top-0 left-0 -z-0 overflow-hidden rotate-180 opacity-30 hover:opacity-70 transition-all duration-1000"
        >
          <g mask='url("#SvgjsMask1018")' fill="none">
            <path
              d="M79 600L679 0L1208.5 0L608.5 600z"
              fill="url(#SvgjsLinearGradient1019)"
            ></path>
            <path
              d="M497.20000000000005 600L1097.2 0L1805.2 0L1205.2 600z"
              fill="url(#SvgjsLinearGradient1019)"
            ></path>
            <path
              d="M1412 600L812 0L530 0L1130 600z"
              fill="url(#SvgjsLinearGradient1020)"
            ></path>
            <path
              d="M892.8 600L292.79999999999995 0L-349.20000000000005 0L250.79999999999995 600z"
              fill="url(#SvgjsLinearGradient1020)"
            ></path>
            <path
              d="M1008.7027101274791 600L1440 168.70271012747918L1440 600z"
              fill="url(#SvgjsLinearGradient1019)"
            ></path>
            <path
              d="M0 600L431.2972898725208 600L 0 168.70271012747918z"
              fill="url(#SvgjsLinearGradient1020)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1018">
              <rect width="1440" height="600" fill="#ffffff"></rect>
            </mask>
            <linearGradient
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
              id="SvgjsLinearGradient1019"
            >
              <stop stopColor="rgba(65, 65, 65, 0.59)" offset="0"></stop>
              <stop
                stopOpacity="0"
                stopColor="rgba(65, 65, 65, 0.59)"
                offset="0.66"
              ></stop>
            </linearGradient>
            <linearGradient
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
              id="SvgjsLinearGradient1020"
            >
              <stop stopColor="rgba(65, 65, 65, 0.59)" offset="0"></stop>
              <stop
                stopOpacity="0"
                stopColor="rgba(65, 65, 65, 0.59)"
                offset="0.66"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className="grow"></div>
        <h2 className="mb-2 mt-24 text-neutral-300 ">aicolors.co</h2>
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
          <button className="text-blue-100 bg-blue-700 text-xxs w-24 h-7 text-center rounded-lg">
            Visit site
          </button>
          <button className="text-neutral-400 border border-neutral-700 text-xxs w-24 h-7 text-center rounded-lg">
            View source
          </button>
        </div>
      </div>
    </>
  );
}
