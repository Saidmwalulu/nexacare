import {
  FacebookIcon,
  InstagramIcon,
  Mail,
  Twitter,
  User,
  Youtube,
  HeartPlus,
  Activity
} from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <section className="px-6 md:px-[60px] text-white bg-[#2E7EF7]">
      {/* Title */}
      <div className="py-6 text-2xl md:text-3xl text-center md:text-left">Login</div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:justify-between items-center">
        <Button
          variant="outline"
          className="w-full md:w-[130px] border border-white bg-transparent flex items-center justify-center gap-2 p-3"
        >
          <User className="h-4 w-4" />
          Patient
        </Button>
        <Button
          variant="outline"
          className="w-full md:w-[130px] border border-white bg-transparent flex items-center justify-center gap-2 p-3"
        >
          <HeartPlus className="h-4 w-4" />
          Doctor
        </Button>
        <Button
          variant="outline"
          className="w-full md:w-[130px] border border-white bg-transparent flex items-center justify-center gap-2 p-3"
        >
          <Activity className="h-4 w-4" />
          Clinic-Admin
        </Button>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center md:justify-around pt-8 gap-4 text-sm md:text-base text-center">
        <span>FAQs</span>
        <span>Blog</span>
        <span>Meet the team</span>
        <span>Contact Us</span>
      </div>

      {/* Social & Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-4 text-sm md:text-base">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <span>Follow us on</span>
          <FacebookIcon className="h-4 w-4" />
          <Twitter className="h-4 w-4" />
          <InstagramIcon className="h-4 w-4" />
          <Youtube className="h-4 w-4" />
          <Mail className="h-4 w-4" />
        </div>
        <div className="text-center md:text-right">
          ©{new Date().getFullYear()} Nexacare. All rights reserved.
        </div>
      </div>
    </section>
  );
}
