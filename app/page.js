import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 sm:px-20 font-sans bg-white text-black dark:bg-[#121212] dark:text-white">
      <header>
        <h1><a>Ouazizi</a></h1>
        <div className="#">
          <ul>
            <li><a>About</a></li>
            <li><a>Skills</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
}
