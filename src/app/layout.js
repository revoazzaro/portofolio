import "./globals.css";

export const metadata = {
  title: "Revo Sasta Azzaro",
  description: "Hi, I'm Revo — a frontend developer passionate about React, Next.js, and clean UI.",
  icons:{
    icon: "/images/favicon.webp"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1c1c1c] text-white">
        {children}
      </body>
    </html>
  );
}
