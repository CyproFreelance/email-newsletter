"use client";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import React, { useEffect, useRef, useState } from "react";
import { DefaultJsonData } from "@/components/Pages/Dashboard/default.mail";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { saveEmail } from "@/actions/save.email";

const Emaileditor = ({ subjectTitle }: { subjectTitle: string }) => {
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
  const { user } = useClerk();
  const emailEditorRef = useRef<EditorRef>(null);
  const history = useRouter();

  const onReady: EmailEditorProps["onReady"] = () => {
    const unlayer: any = emailEditorRef.current?.editor;
    unlayer.loadDesign(jsonData);
  };

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    // unlayer?.exportHtml(async (data) => {
    //   const { design, html } = data;
    //   setJsonData(design);
    //   await sendEmail({
    //     userEmail: ["sponsorship@becodemy.com"],
    //     subject: subjectTitle,
    //     content: html,
    //   }).then((res: any) => {
    //     toast.success("Email sent successfully!");
    //     history.push("/dashboard/write");
    //   });
    // });
  };

  const saveDraft = async () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design } = data;
      await saveEmail({
        title: subjectTitle,
        content: JSON.stringify(design),
        newsLetterOwnerId: user?.id!,
      }).then((res: any) => {
        toast.success(res.message);
        history.push("/dashboard/write");
      });
    });
  };

  return (
    <>
      {!loading && (
        <div className="w-full h-[90vh] relative">
          <EmailEditor
            minHeight={"80vh"}
            ref={emailEditorRef}
            onReady={onReady}
            appearance={{ theme: "modern_dark" }}
          />
          <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t border-a-4 p-3">
            <Button
            variant={'outline'}
            size={'lg'}
            onClick={saveDraft}
            >
              <span className="opacity-[.7]">Save Draft</span>
            </Button>
            <Button
            
              size={'lg'}
              onClick={exportHtml}
            >
              <span>Send</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Emaileditor;
