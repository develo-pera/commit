import "./globals.scss";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export const metadata = {
  title: "Commit",
  description: "For event organizers looking for commitments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
