import { FaTools } from "react-icons/fa";
import {
  SiAngular,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiPython,
  SiGooglecloud,
  SiSupabase,
  SiReactivex,
  SiCplusplus,
  SiDocker,
  SiTailwindcss,
  SiReact,
  SiFirebase,
} from "react-icons/si";

export default function stack() {
  return (
    <div className="mt-24">
      <div className="bg-neutral-800 p-2 mb-6 rounded-full border border-neutral-700 w-fit">
        <FaTools className="text-neutral-300 "></FaTools>
      </div>
      <h2 className="text-neutral-300 text-md">Tools</h2>
      <p className="text-xs text-neutral-500 mb-4">
        Some of the technologies I&apos;ve worked with
      </p>
      <div>
        <ul className="flex flex-wrap border border-neutral-800 p-6 rounded-md gap-6 text-xs sm:text-sm text-neutral-500 [&>*]:flex [&>*]:gap-2 [&>*]:items-center [&>*]:md:min-w-[8.5rem]">
          <li>
            <SiAngular className="text-lg sm:text-2xl"></SiAngular>
            <p>Angular</p>
          </li>
          <li>
            <SiNextdotjs className="text-lg sm:text-2xl"></SiNextdotjs>
            <p>Next.js 13</p>
          </li>
          <li>
            <SiReact className="text-lg sm:text-2xl"></SiReact>
            <p>React</p>
          </li>
          <li>
            <SiTypescript className="text-lg sm:text-2xl"></SiTypescript>
            <p>TypeScript</p>
          </li>
          <li>
            <SiTailwindcss className="text-lg sm:text-2xl"></SiTailwindcss>
            <p>Tailwind CSS</p>
          </li>
          <li>
            <SiSupabase className="text-lg sm:text-2xl"></SiSupabase>
            <p>Supabase</p>
          </li>
          <li>
            <SiFirebase className="text-lg sm:text-2xl"></SiFirebase>
            <p>Firebase</p>
          </li>
          <li>
            <SiReactivex className="text-lg sm:text-2xl"></SiReactivex>
            <p>Rxjs</p>
          </li>

          <li>
            <SiPostgresql className="text-lg sm:text-2xl"></SiPostgresql>
            <p>PostgreSQL</p>
          </li>
          <li>
            <SiPython className="text-lg sm:text-2xl"></SiPython>
            <p>Python</p>
          </li>
          <li>
            <SiGooglecloud className="text-lg sm:text-2xl"></SiGooglecloud>
            <p>Google Cloud</p>
          </li>
          {/* <li>
            <SiCplusplus className="text-lg sm:text-2xl"></SiCplusplus>
            <p>C++</p>
          </li> */}
          <li>
            <SiDocker className="text-lg sm:text-2xl"></SiDocker>
            <p>Docker</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
