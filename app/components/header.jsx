"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 sm:px-12 bg-white dark:bg-[#111] shadow-md fixed top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-black dark:text-white"
        >
          <span className="text-indigo-600">Oua</span>
          <span className="text-gray-800 dark:text-white">zizi</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-lg text-gray-700 dark:text-gray-300 font-medium">
          <Link href="#about" className="hover:text-indigo-600 transition">About</Link>
          <Link href="#skills" className="hover:text-indigo-600 transition">Skills</Link>
          <Link href="#projects" className="hover:text-indigo-600 transition">Projects</Link>
          <Link href="#contact" className="hover:text-indigo-600 transition">Contact</Link>
        </nav>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-lg text-gray-700 dark:text-gray-300 font-medium px-4">
          <Link href="#about" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 transition">About</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 transition">Skills</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 transition">Projects</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 transition">Contact</Link>
        </div>
      )}
    </header>
  );
}
