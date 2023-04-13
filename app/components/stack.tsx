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
    <div className="mt-16">
      <div className="bg-neutral-800 p-2 mb-6 rounded-full border border-neutral-700 w-fit">
        <FaTools className="text-neutral-300 "></FaTools>
      </div>
      <h2 className="text-neutral-300 text-xs">Tech Stack</h2>
      <p className="text-xxs text-neutral-500 mb-4">
        Some of the technologies I&apos;ve worked with
      </p>
      <div>
        <ul className="flex flex-wrap gap-4 text-neutral-500 [&>*]:flex [&>*]:gap-2">
          <li>
            <SiAngular className="text-2xl"></SiAngular>
            <p>Angular</p>
          </li>
          <li>
            <SiNextdotjs className="text-2xl"></SiNextdotjs>
            <p>Next.js 13</p>
          </li>
          <li>
            <SiReact className="text-2xl"></SiReact>
            <p>React</p>
          </li>
          <li>
            <SiTypescript className="text-2xl"></SiTypescript>
            <p>TypeScript</p>
          </li>
          <li>
            <SiTailwindcss className="text-2xl"></SiTailwindcss>
            <p>Tailwind CSS</p>
          </li>
          <li>
            <SiSupabase className="text-2xl"></SiSupabase>
            <p>Supabase</p>
          </li>
          <li>
            <SiFirebase className="text-2xl"></SiFirebase>
            <p>Firebase</p>
          </li>
          <li>
            <SiReactivex className="text-2xl"></SiReactivex>
            <p>Rxjs</p>
          </li>
          <li>
            <SiPython className="text-2xl"></SiPython>
            <p>Python</p>
          </li>
          <li>
            <SiGooglecloud className="text-2xl"></SiGooglecloud>
            <p>Google Cloud</p>
          </li>

          <li>
            <SiCplusplus className="text-2xl"></SiCplusplus>
            <p>C++</p>
          </li>
          <li>
            <SiDocker className="text-2xl"></SiDocker>
            <p>Docker</p>
          </li>

          <li>
            <SiPostgresql className="text-2xl"></SiPostgresql>
            <p>PostgreSQL</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
