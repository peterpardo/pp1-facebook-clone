import Provider from "@/components/Provider";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

// default google font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook clone",
  description: "This is a facebook clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
