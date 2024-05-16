"use server";

import Email from "@/models/email.model";
import { connectDb } from "@/lib/db";

export const getEmails = async ({
    newsLetterOwnerId,
}: {
    newsLetterOwnerId: String
}) => {
    try {
        await connectDb()
        const emails = await Email.findOne({newsLetterOwnerId});
        return emails
    } catch (error) {
        console.log(error);
        
    }
}