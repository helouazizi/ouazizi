import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-black dark:text-white">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="bg-gray-600 dark:bg-[#121212] px-6 py-12 sm:px-20 pt-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white">
            Welcome to Ouazizi's Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto sm:mx-0">
            I am a Full-Stack Developer creating modern web applications and APIs. Let's work together to bring your ideas to life.
          </p>

          <div className="mt-6 flex justify-center sm:justify-start gap-6">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold transition-all hover:bg-blue-700 transform hover:scale-105"
            >
              Explore My Projects
            </a>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
