import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Gift, Star, Zap } from "lucide-react";
import { HeroTestimonailProfile } from "@/constants";

const Hero = () => {
  return (
    <main className="w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-24 py-14 bgimg transition-all">
      <div className="flex flex-col items-center lg:items-start gap-6 w-full py-14">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-none text-center lg:text-start">
          Power Your <span className="text-a-3">Business</span> Outreach{" "}
          <span className="relative whitespace-nowrap">
            <span className="absolute bg-pink-500 -left-2 top-2 bottom-1 -right-2 md:-left-3 md:top-5 md:bottom-2 md:-right-3 -rotate-1"></span>
            <span className="relative text-neutral">Efforts</span>
          </span>
        </h1>
        <p className="text-a-1/50 lg:text-start text-lg  text-center max-w-2xl">
          Your gateway to streamlined and effective email marketing. Delivering
          impactful newsletters effortlessly, connect, engage, and grow audience
        </p>
        <Button className="text-lg md:text-xl" size={"lg"}>
          <Zap />
          &nbsp;Get Sparkpost
        </Button>
        <p className="text-a-1/50  text-sm md:text-base text-center md:text-start">
          <span className="text-emerald-700">
            <Gift className="inline-block" /> $100 off
          </span>{" "}
          for the first 100 customers (44 left)
        </p>

        <div className="mt-4 flex items-center -space-x-3">
          {HeroTestimonailProfile.map((image) => (
            <Image
              src={image.name}
              alt=""
              key={image.id}
              width={40}
              height={40}
              className="rounded-full"
            />
          ))}

          <div className="flex flex-col px-4 lg:px-6">
            <div className="flex items-center justify-start">
              {[0, 1, 2, 3, 4].map((_, index) => (
                <Star key={index} className="text-yellow-500" />
              ))}
            </div>
            <div className="flex">
              <p className="text-white/60 text-sm lg:text-base">
                <span className="font-semibold text-white/80">56 users</span>{" "}
                rated us 5 Star
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Image
          src={"/hero.svg"}
          alt=""
          width={750}
          height={750}
          className="hidden lg:block"
        />
      </div>
    </main>
  );
};

export default Hero;
