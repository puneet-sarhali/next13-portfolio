export default function footer() {
  return (
    <footer className="border-t border-neutral-850 text-neutral-400 py-8">
      <p className="text-xs text-neutral-300 mb-4">Made by Puneet Sandhu</p>
      <div className="flex flex-col sm:flex-row">
        <div>
          <p className="text-xxs">CS Student at Simon Fraser University</p>
          <p className="text-xxs">Vancouver, Canada</p>
        </div>
        <div className="sm:ml-auto sm:text-right mt-2 sm:mt-0">
          <p className="text-xxs text-neutral-400">
            Built with Next.js and Tailwind CSS
          </p>
          <p className="text-xxs text-neutral-400">
            Svg Background by <a href="">BGJar</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
