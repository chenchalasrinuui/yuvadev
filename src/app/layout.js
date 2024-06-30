import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import TopHeader from "@/components/TopHeader/TopHeader";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>yuvadevitech</title>
        <link rel="icon" href="favicon.ico" ></link>
      </head>
      <body className={inter.className}>
        <TopHeader />
        <Header />
        <div className="mb-5 min-height-100vh">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
