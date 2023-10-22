import { Footer, Navbar } from "@/components";

import "./globals.css";

export const metadata = {
  title: "Car Hub",
  description: "Discover best cars in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
