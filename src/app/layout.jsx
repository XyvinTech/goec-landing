import Footer from "@/components/Layout/Footer";
import { inter, roboto } from "./font";
import "../styles/globalstyles.css";
import Navbar from "@/components/Layout/Navbar";

export const metadata = {
  title: "GOEC",
  description: " Discription",
};

export default function RootLayout({ title, description, children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
