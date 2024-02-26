import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beta Buddy",
  description: "Stay tuned for Beta Buddy!",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/icon.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/icon-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
