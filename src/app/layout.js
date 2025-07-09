import "./globals.css";

export const metadata = {
  title: "Revo Sasta Azzaro",
  description: "Hi, I'm Revo — a frontend developer passionate about React, Next.js, and clean UI."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
