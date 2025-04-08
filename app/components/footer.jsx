import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-[#111] text-gray-700 dark:text-gray-300 pt-12 pb-8 px-6 sm:px-12 font-[var(--font-geist-sans)]">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-2">Ouazizi</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Creative developer passionate about building modern web apps, APIs, and solving digital problems.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:ouazizi@example.com" className="hover:text-indigo-600">ouazizi@example.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-indigo-600">+123 456 7890</a></li>
            <li>Location: Morocco</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-4 text-xl">
            <Link href="https://github.com/ouazizi" target="_blank" className="hover:text-indigo-600">
              <FaGithub />
            </Link>
            <Link href="https://linkedin.com/in/ouazizi" target="_blank" className="hover:text-indigo-600">
              <FaLinkedin />
            </Link>
            <Link href="https://x.com/ouazizi" target="_blank" className="hover:text-indigo-600">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-sm text-gray-500 dark:text-gray-600">
        © {new Date().getFullYear()} Ouazizi. All rights reserved.
      </div>
    </footer>
  );
}
