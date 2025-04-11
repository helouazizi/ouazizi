// app/layout.js
import '../styles/globals.css'; // Import global styles
import Header from './components/header'; // Import Header component
import Footer from './components/footer'; // Import Footer component

export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <body className="min-h-screen bg-white font-sans text-black dark:text-white">
          {/* Header Component */}
          <Header />

          {/* Main Content */}
          <main>{children}</main>

          {/* Footer Component */}
          <Footer />
        </body>
      </html>
    </>
  );
}
