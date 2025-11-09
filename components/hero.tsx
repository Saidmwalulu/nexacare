import { Button } from "./ui/button";
import heroImg from "@/public/phonedoc.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-linear-to-b from-muted/30 to-background md:px-[60px]"
    >
      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 ">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              Transforming <span>Healthcare Access</span>
            </h1>
            <p className="text-[24px]">
              NexaCare is a next-generation digital health platform dedicated to
              transforming healthcare across Nigeria and Sub-Saharan Africa.
            </p>
            <div>
              <Link href="/register">
                <Button variant="hero" className="w-[100px] bg-[#2E7EF7]">Sign Up</Button>
              </Link>
                <Button
                  variant="outline"
                  className="mx-10 w-[100px] text-[#2E7EF7] border border-[#2E7EF7]"
                >
                Log in
              </Button>
            </div>
          </div>
          <div>
            <div className="flex lg:justify-end justify-center">
              <Image
                src={heroImg}
                alt="Phone doctor"
                className="w-auto h-[400px] lg:h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
