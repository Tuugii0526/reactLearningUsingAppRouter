import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "../components/nav/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: "%s | React learning",
    default: "React learning",
  },
  description: "The react examples for react learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full min-h-screen p-10 relative grid grid-cols-[1fr_2fr]">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
