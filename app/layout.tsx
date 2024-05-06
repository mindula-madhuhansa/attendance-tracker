import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Attendance Tracker",
  description: "Attendance Tracker with newest cutting edge technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
