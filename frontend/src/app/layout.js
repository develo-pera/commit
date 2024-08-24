import "./globals.scss";

export const metadata = {
  title: "Commit",
  description: "For event organizers looking for commitments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">{children}</body>
    </html>
  );
}
