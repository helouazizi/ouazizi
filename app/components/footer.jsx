import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Your main content here */}
      </main>

      <footer className="bg-gray-900 dark:bg-[#111] text-white py-12 px-6 sm:px-12 font-[var(--font-geist-sans)]">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-extrabold text-indigo-500 dark:text-indigo-400 mb-4">
              Ouazizi
            </h2>
            <p className="text-sm text-gray-400 dark:text-gray-300 leading-relaxed">
              Building modern solutions for the digital world. Passionate about creating impactful web apps and APIs.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="text-sm space-y-2 text-gray-400 dark:text-gray-300">
              <li>Email: <a href="mailto:ouazizi@example.com" className="hover:text-indigo-500">ouazizi@example.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-indigo-500">+123 456 7890</a></li>
              <li>Location: Morocco</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex gap-6 text-2xl text-gray-400 dark:text-gray-300">
              <Link href="https://github.com/ouazizi" target="_blank" className="hover:text-indigo-500 transition">
                <FaGithub />
              </Link>
              <Link href="https://linkedin.com/in/ouazizi" target="_blank" className="hover:text-indigo-500 transition">
                <FaLinkedin />
              </Link>
              <Link href="https://x.com/ouazizi" target="_blank" className="hover:text-indigo-500 transition">
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-700 dark:border-gray-800 pt-6 text-center text-sm text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} Ouazizi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
