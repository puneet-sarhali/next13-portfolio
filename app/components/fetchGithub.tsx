//TODO: test if data is being cached
//TODO: ERROR HANDING when data is not fetched
import { SiGithub } from "react-icons/si";

async function fetchGithubData(repoName: string) {
  try {
    const data = await fetch(
      `https://api.github.com/repos/puneet-sarhali/${repoName}/stats/commit_activity`,
      {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
          Authorization: "bearer " + process.env.GITHUB_API_KEY,
        },
        next: {
          revalidate: 0,
        },
      }
    );
    const json = await data.json();

    if (json.message == "Not Found" || Object.keys(json).length === 0) {
      return [];
    }

    let flattened: number[] = [];
    json.forEach((element: any) => {
      flattened.push(element.days);
    });
    return flattened.flat(1);
  } catch (error) {
    throw new Error("Error fetching github data");
  }
}

function calculateColor(commits: number) {
  if (commits === 0) return "bg-neutral-850";
  if (commits === 1) return "bg-neutral-700";
  if (commits === 2) return "bg-neutral-600";
  if (commits === 3) return "bg-neutral-500";
  if (commits === 4) return "bg-neutral-500";
  if (commits === 5) return "bg-neutral-400";
  if (commits === 6) return "bg-neutral-400";
  if (commits === 7) return "bg-neutral-300";
  if (commits > 7) return "bg-neutral-300";
}

function sumArrays(arrays: number[][]) {
  const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
  const result = Array.from({ length: n });
  return result.map((_, i) =>
    arrays.map((xs) => xs[i] || 0).reduce((sum, x) => sum + x, 0)
  );
}

export default async function fetchGithub() {
  const repoNames = [
    "personal-projects",
    "palette-generator",
    "next13-portfolio",
    "palette",
    "open-collab",
  ];
  const commitData = repoNames.map(fetchGithubData);
  const res = await Promise.all(commitData);
  let total = sumArrays(res);

  return (
    <>
      <div className="bg-neutral-800 p-2 mb-6 rounded-full border border-neutral-700 w-fit mt-24">
        <SiGithub className="text-neutral-300 "></SiGithub>
      </div>
      <h2 className="text-neutral-200 text-md">Github activity</h2>
      <p className="text-xs text-neutral-500 mb-4">
        Contribution history visual for the past year
      </p>
      <div className="flex flex-wrap gap-[3px]">
        {total &&
          total.map((commits, index) => {
            return (
              <div
                key={index}
                className={`h-2.5 w-2.5 ${calculateColor(commits)} rounded-sm`}
              ></div>
            );
          })}
      </div>
    </>
  );
}
