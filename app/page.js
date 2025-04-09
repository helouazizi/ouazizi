import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-black dark:text-white">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24 px-4 sm:px-8 lg:px-20 py-20 bg-white dark:bg-[#121212]">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ouazizi</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            A passionate <strong className="text-blue-600 dark:text-blue-400">Full-Stack Developer</strong> specializing in modern web applications and powerful APIs using technologies like <strong>Golang</strong> and <strong>Next.js</strong>.
          </p>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-semibold hover:bg-blue-600 hover:text-white dark:hover:text-white dark:hover:bg-blue-400 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-blue-600 dark:border-blue-400">
          <img
            src="/me.jpg"
            alt="Ouazizi profile picture"
            className="w-full h-full object-cover"
          />
        </div>
      </section>



      {/* Footer Component */}
      <Footer />
    </div>
  );
}
