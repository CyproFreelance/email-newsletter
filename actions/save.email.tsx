"use server";

import Email from "@/models/email.model";
import { connectDb } from "@/lib/db";

export const saveEmail = async ({
  title,
  content,
  newsLetterOwnerId,
}: {
  title: String;
  content: String;
  newsLetterOwnerId: String;
}) => {
  try {
    await connectDb();
    const email = await Email.findOne({
      title,
      newsLetterOwnerId,
    });

    if (email) {
      await Email.findByIdAndUpdate(email._id, {
        content,
      });
      return {
        message: "Email Updated Sucessfully",
      };
    } else {
      await Email.create({
        title,
        content,
        newsLetterOwnerId,
      });
      return { message: "Email created and saved sucessfully" };
    }
  } catch (error) {
    console.log(error);
  }
};
