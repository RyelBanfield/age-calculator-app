import "./globals.css";

export const metadata = {
  title: "Age Calculator",
  description: "Figure out how old you are in years, months, and days.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
