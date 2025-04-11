import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-black dark:text-white">
      {/* Header Component */}
      <Header />
      {/* Footer Component */}
      <Footer />
    </div>
  );
}
