"use client";
import { ICONS } from "@/constants/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Emaileditor from "@/components/Pages/Dashboard/email.editor";

// const Emaileditor = dynamic(
//   () => import("@/shared/components/editor/email.editor"),
//   {
//     ssr: false,
//   }
// );


const Page = () => {
  const searchParams = useSearchParams();
  const subject: string = searchParams.get("subject")!;
  const subjectTitle = subject.replace(/-/g, " ");

  return (
    <div className="w-full flex bg-a-2/70 border-b border-a-4">
      <div className="w-full pt-4 px-14 text-a-1 rounded-r-xl">
        {/* back arrow */}
        <Link
          href={"/dashboard/write"}
          className="opacity-[.7] w-min flex text-xl transition-all rounded-full items-center hover:bg-white/10 px-4 py-2"
        >
          <span>{ICONS.backArrow}</span>
          <span>Exit</span>
        </Link>
        {/* email editor */}
        <div className="my-5">
          <Emaileditor subjectTitle={subjectTitle} />
        </div>
      </div>
    </div>
  );
};

export default Page;