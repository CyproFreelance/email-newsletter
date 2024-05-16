"use client";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ICONS } from "@/constants/icons";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getEmails } from "@/actions/get.emails";

const Write = () => {
  const [emailTitle, setEmailTitle] = useState("");
  const [emails, setEmails] = useState<any>([]);
  const router = useRouter();
  const { user } = useClerk();

  const handleCreate = () => {
    if (emailTitle.length === 0) {
      toast.error("Please give a Name to your Email");
    } else {
      const formattedTitle = emailTitle.replace(/\s+/g, "-").replace(/&/g, "-");
      router.push(`/editor?subject=${formattedTitle}`);
    }
  };

  useEffect(() => {
    FindEmails();
    
  }, [user])
  

  const FindEmails = async () => {
    await getEmails({ newsLetterOwnerId: user?._id!})
    .then((res: any) => {
      setEmails(res);
    })
    .catch((error) => {
      console.log(error);
    });
  } 

  return (
    <div className="w-full flex p-5 flex-wrap gap-6 relative">
      <Dialog>
        <div className="w-full border-b border-a-4 pb-4">
          <h1 className="text-2xl font-semibold text-a-1">All Saved Emails</h1>

          <DialogTrigger>
            <div className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 text-2xl fixed bottom-10 right-10 bg-a-3 text-a-1 hover:bg-a-3/90 h-12 rounded-[4px] px-5">
              <span className="text-2xl block text-center">{ICONS.plus}</span>
              Create New
            </div>
          </DialogTrigger>
        </div>

        <DialogContent className="bg-a-4 border-none text-a-1">
          <DialogHeader>
            <DialogTitle>Enter your email subject</DialogTitle>
            <DialogDescription>
              Please enter the email subject to continue editing your newsletter
            </DialogDescription>
          </DialogHeader>
          <Input
            type="text"
            name=""
            id=""
            className="w-full my-2 h-[35px] px-2 outline-none border-none bg-a-2/50 text-a-1"
            placeholder="Proxy Likes Peanut Butter"
            value={emailTitle}
            onChange={(e) => setEmailTitle(e.target.value)}
          />
          <Button
            className="rounded text-xl mt-3"
            variant={"secondary"}
            onClick={handleCreate}
          >
            Continue
          </Button>
        </DialogContent>
      </Dialog>

      {/* saved emails */}
      {emails &&
        emails.map((i: any) => {
          const formattedTitle = i?.title
            ?.replace(/\s+/g, "-")
            .replace(/&/g, "-");
          return (
            <div
              key={i?._id}
              className="w-[200px] h-[200px] z-[100] relative bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer"
            >
              <span
                className="absolute block z-[10001] right-2 top-2 text-2xl cursor-pointer"
                //   onClick={() => deleteHanlder(i?._id)}
              >
                {ICONS.delete}
              </span>
              <Link
                href={`/dashboard/new-email?subject=${formattedTitle}`}
                className="text-xl"
              >
                {i.title}
              </Link>
            </div>
          );
        })}

      {/* {open && (
        <div className="absolute flex items-center justify-center top-0 left-0 bg-[#2020200e] backdrop-blur-[3px] h-screen w-full">
          <div className="w-[600px] p-5 bg-a-6 rounded shadow relative">
            <div className="absolute top-3 right-3">
              <span
                className="text-lg cursor-pointer text-a-1"
                onClick={() => setOpen(!open)}
              >
                {ICONS.cross}
              </span>
            </div>
            <h5 className="text-2xl text-a-1 mb-4">Enter your Email subject</h5>
            <Input
              type="text"
              name=""
              id=""
              className="w-full my-2 h-[35px] px-2 outline-none border-none bg-a-2/50 text-a-1"
              placeholder="Write Title Here..."
              value={emailTitle}
              onChange={(e) => setEmailTitle(e.target.value)}
            />
            <Button
              className="rounded text-xl mt-3"
              variant={"default"}
              onClick={handleCreate}
            >
              Continue
            </Button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Write;
