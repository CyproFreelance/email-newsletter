import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { dark } from "@clerk/themes";

const fontSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SparkPost",
  description: "Email Newsletter app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark
    }}>
      <html lang="en">
        <body className={cn("bg-a-2 font-sans", fontSans.variable)}>
          <Toaster position="top-center" reverseOrder={false}/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
