import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-black dark:text-white">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <main className="flex items-center justify-center flex-col text-center py-10 sm:py-16 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl py-10 font-bold text-black dark:text-white mb-4">
          Hi, I'm Hassan El Ouazizi
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-6 max-w-3xl mx-auto break-words">
          Full Stack Developer with experience in building scalable web applications and a passion for clean code and modern technologies. I love creating intuitive user interfaces and optimizing backend systems to scale effectively.
        </p>
        <div className="flex space-x-4 justify-center">
          <a
            href="#projects"
            className="px-4 py-2 text-sm sm:text-base md:text-lg bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
          >
            See My Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm sm:text-base md:text-lg border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-600 hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
