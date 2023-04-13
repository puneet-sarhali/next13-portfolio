//TODO: test if data is being cached
import { SiGithub } from "react-icons/si";

async function fetchGithubData() {
  const data = await fetch(
    "https://api.github.com/repos/puneet-sarhali/personal-projects/stats/commit_activity",
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: "bearer " + process.env.GITHUB_API_KEY,
      },
    }
  );
  const json = await data.json();
  return json;
}

function calculateColor(commits: number) {
  if (commits === 0) return "bg-neutral-850";
  if (commits === 1) return "bg-neutral-800";
  if (commits === 2) return "bg-neutral-700";
  if (commits === 3) return "bg-neutral-600";
  if (commits === 4) return "bg-neutral-600";
  if (commits === 5) return "bg-neutral-500";
  if (commits === 6) return "bg-neutral-500";
  if (commits === 7) return "bg-neutral-400";
  if (commits > 7) return "bg-neutral-400";
}

export default async function fetchGithub() {
  const commitData = await fetchGithubData();
  return (
    <>
      <div className="bg-neutral-800 p-2 mb-6 rounded-full border border-neutral-700 w-fit">
        <SiGithub className="text-neutral-300 "></SiGithub>
      </div>
      <h2 className="text-neutral-300 text-xs">Github activity</h2>
      <p className="text-xxs text-neutral-500 mb-4">
        Contribution history visual for the past year
      </p>
      <div className="flex flex-wrap gap-[3px]">
        {commitData.map((commit: any) => {
          return commit.days.map((day: any, index: number) => {
            const dayColor = calculateColor(day);
            return (
              <div
                key={`${commit.week}${index}`}
                className={`w-2.5 h-2.5 ${dayColor} rounded-sm`}
              ></div>
            );
          });
        })}
      </div>
    </>
  );
}