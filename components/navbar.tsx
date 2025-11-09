"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/nexacarelogo.png"
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/50 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-[50px]">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <Image src={logo} alt="NexaCare Logo" width={110} height={50} />
            {/* <span className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              NexaCare
            </span> */}
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about-us")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </button>
            <Link href="/register">
              <Button onClick={() => scrollToSection("get-started")} variant="hero" size="default" className="bg-[#2E7EF7]">
                Get Started
              </Button>
            </Link>
            <button className="text-foreground hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about-us")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              About Us
            </button>
            <Link href="/register">
              <Button onClick={() => scrollToSection("get-started")} variant="default" size="default" className="w-full bg-[#2E7EF7]">
                Get Started
              </Button>
            </Link>
            <button className="w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
