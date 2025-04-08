import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 sm:px-20 font-sans bg-white text-black dark:bg-[#121212] dark:text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-4 mb-24">
        <Image
          src="/avatar.png" // Replace with your actual image
          alt="Your Avatar"
          width={120}
          height={120}
          className="rounded-full border dark:invert"
        />
        <h1 className="text-4xl font-bold">Hi, I'm John Doe</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Full-stack Developer & Cybersecurity Enthusiast
        </p>
      </section>

      {/* Projects */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project Card */}
          <div className="border rounded-xl p-4 bg-white dark:bg-[#1a1a1a] shadow">
            <h3 className="font-semibold text-xl mb-2">Portfolio Website</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A responsive portfolio built with Next.js and Tailwind CSS.
            </p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* About */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm a passionate developer with a focus on clean code, modern web technologies,
          and building meaningful products. I also have a strong interest in cloud security
          and backend development using Golang.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
        <p>Email: <a className="text-blue-600 dark:text-blue-400" href="mailto:john@example.com">john@example.com</a></p>
        <p>GitHub: <a className="text-blue-600 dark:text-blue-400" href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">your-username</a></p>
      </section>
    </div>
  );
}
