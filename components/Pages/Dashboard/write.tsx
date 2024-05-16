"use client";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ICONS } from "@/constants/icons";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { deleteEmail } from "@/actions/delete.email";
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
  }, [user]);

  const FindEmails = async () => {
    await getEmails({ newsLetterOwnerId: user?.id! })
      .then((res) => {
        setEmails(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleMouseEnter = (itemId: any) => {
    setHoveredItemId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };
  const deleteHanlder = async (id: string) => {
    await deleteEmail({ emailId: id }).then((res) => {
      FindEmails();
    });

    toast.success('Deleted Email Letter')
  };

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
      {Array.isArray(emails) &&
        emails.map((i: any) => {
          const formattedTitle = i?.title
            ?.replace(/\s+/g, "-")
            .replace(/&/g, "-");

          return (

              <div
                key={i?._id}
                className="w-[200px] h-[150px] z-[0] text-a-1 relative bg-a-6 flex flex-col items-center justify-center rounded border border-a-4 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(i?._id)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className={`absolute block transition-all duration-300 z-20 right-2 top-2 text-2xl cursor-pointer text-red-500`}
                  onClick={() => deleteHanlder(i?._id)}
                >
                  {ICONS.delete}
                </span>
                <Link
              href={`/editor?subject=${formattedTitle}`}
              className="text-xl w-full h-full flex items-center justify-center"
            >
                {i.title}
                </Link>
              </div>
            
          );
        })}
    </div>
  );
};

export default Write;
