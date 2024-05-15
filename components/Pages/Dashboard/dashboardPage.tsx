"use client";
import { useUser } from "@clerk/nextjs";

import OverviewCard from "@/components/Pages/Dashboard/overview-card";
import SubscribersChart from "./subscribers.chart";
import { Button } from "@/components/ui/button";
import { ICONS } from "@/constants/icons";
import toast from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";

const DashboardPage = () => {
  const { user } = useUser();
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement;
    if (smallText) {
      const copyText = smallText.innerText;
      navigator.clipboard.writeText(copyText).then(() => {
        setCopied(true);
        toast.success("Copied");
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <>
      <div className="p-5 w-full bg-a-2">
        <h1 className="text-2xl text-a-1 font-medium">
          Hi {user?.fullName} 👋
        </h1>
        <p className="opacity-70 text-sm text-white pt-1">
          Here&apos;s how your publication is doing.
        </p>

        <div className="w-full flex">
          <div className="w-[65%] min-h-[80vh] pr-5">
            <br />
            <OverviewCard />
            <br />
            <SubscribersChart />
          </div>
          <div className="w-[35%] p-5">
            <div className="w-full flex justify-end">
              <Button size={"lg"} className="text-xl">
                <span>{ICONS.write}</span>
                Start Writing
              </Button>
            </div>
            <br />
            <div>
              <h5 className="text-xl font-medium text-a-1">Resources</h5>
              <div className="w-full bg-a-2 border border-a-6 rounded p-5 my-3">
                <div>
                  <h4 className="font-medium text-a-1">Home page</h4>

                  <div
                    className="w-full px-2 my-1 h-[38px] bg-transparent border border-a-6 rounded-lg relative flex items-center cursor-pointer"
                    onClick={handleCopyClick}
                  >
                    <small
                      className={`w-[70%] text-a-1/60 text-sm overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                        copied ? "bg-blue-200 text-black" : "bg-transparent"
                      }`}
                    >
                      {process.env.NEXT_PUBLIC_WEBSITE_URL}/subscribe?username=
                      {user?.username}
                    </small>
                    <div className="absolute h-[38px] w-[90px] rounded-r-lg bg-a-4 right-0 flex items-center justify-center">
                      <span className="text-lg text-a-1">{ICONS.copy}</span>
                      {copied ? (
                        <span className="pl-1 text-a-1">Copied</span>
                      ) : (
                        <span className="pl-1 text-a-1">Copy</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-a-2 border border-a-6 rounded p-5 my-3">
              <h5 className="font-medium text-a-1">Tutorials</h5>
              <p className="text-sm opacity-[.7] text-a-1">
                Learn how to get started on SparkPost. Special Tool made by
                Cypro Studio. Some tools are still under development apologies
                for any inconvience
              </p>
              <br />
              <Button className="bg-[#FBCFE8] text-[#831743] rounded-lg h-[35px] flex items-center">
                Tutorials <span>{ICONS.link}</span>
              </Button>
            </div>

            <div className="w-full bg-a-2 border border-a-4 rounded p-5 my-3">
              <h5 className="font-medium text-a-1">Need help?</h5>
              <Link href={"/"}>
                <div className="w-max px-3 my-2 h-[33px] bg-transparent border border-a-4 rounded-lg flex items-center">
                  <span className="text-sm text-a-1/70">Knowledge base</span>
                  <span className="ml-1 text-a-1/70">{ICONS.link}</span>
                </div>
              </Link>
              <Link href={"/"}>
                <div className="w-max px-3 my-2 h-[33px] bg-transparent border border-a-4 rounded-lg flex items-center">
                  <span className="text-sm text-a-1/70">API Documentation</span>
                  <span className="ml-1 text-a-1/70">{ICONS.link}</span>
                </div>
              </Link>
              <Link href={"/"}>
                <div className="w-max px-3 my-2 h-[33px] bg-transparent border border-a-4 rounded-lg flex items-center">
                  <span className="text-sm text-a-1/70">Blog</span>
                  <span className="ml-1 text-a-1/70">{ICONS.link}</span>
                </div>
              </Link>
              <Link href={"/"}>
                <div className="w-max px-3 my-2 h-[33px] bg-transparent border border-a-4 rounded-lg flex items-center">
                  <span className="text-sm text-a-1/70">FAQ</span>
                  <span className="ml-1 text-a-1/70">{ICONS.link}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
