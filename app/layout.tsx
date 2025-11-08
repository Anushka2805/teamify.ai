import type { Metadata } from "next";
import { Toaster } from "sonner"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "Teamify.AI",
  description: "Collaborate. Build. Innovate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
