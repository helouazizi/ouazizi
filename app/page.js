import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 sm:px-20 font-sans bg-white text-black dark:bg-[#121212] dark:text-white">
      {/* set up the header components */}
      <Header/>
      {/* set up the footer here */}
      <Footer/>
    </div>
  );
}
