import {
  FacebookIcon,
  InstagramIcon,
  Mail,
  Twitter,
  User,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <section className="px-[60px] text-white bg-[#2E7EF7]">
      <div className="py-8 text-3xl">Login</div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          className="w-[130px] border border-white bg-transparent p-[15px]"
        >
          <User className="h-4 w-4" />
          Patient
        </Button>
        <Button
          variant="outline"
          className="w-[130px] border border-white bg-transparent p-[15px]"
        >
          <User className="h-4 w-4" />
          Doctor
        </Button>
        <Button
          variant="outline"
          className="w-[130px] border border-white bg-transparent p-[15px]"
        >
          <User className="h-4 w-4" />
          Clinic-Admin
        </Button>
      </div>
      <div className="flex justify-around pt-8">
        <span>FAQs</span>
        <span>Blog</span>
        <span>Meet the team</span>
        <span>Contact Us</span>
      </div>
      <div className="flex justify-between py-8">
        <div className="flex">
          Follow us on <FacebookIcon />
          <Twitter /> <InstagramIcon /> <Youtube /> <Mail />
        </div>
        <div className="">
          ©{new Date().getFullYear()} Nexacare. All rights reserved.
        </div>
      </div>
    </section>
  );
}
