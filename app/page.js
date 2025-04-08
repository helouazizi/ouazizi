import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 sm:px-20 font-sans bg-gray-1000 text-black dark:bg-[#222] dark:text-white">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="px-6 py-12 sm:px-20">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Welcome to Ouazizi's Portfolio
        </h1>
        <p className="mt-4 text-lg text-center sm:text-left">
          I am a full-stack developer specializing in building modern web applications and APIs.
        </p>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
