import type { Metadata } from "next";
import { Inter,Poppins,Roboto_Mono} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ['greek'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['greek'],
  display: 'swap',
  variable: '--font-roboto-mono',
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" className="font-sans">
      <body className={`${inter.variable} ${roboto_mono.variable}` }>{children}</body>
    </html>
    </ClerkProvider>
  );
}
