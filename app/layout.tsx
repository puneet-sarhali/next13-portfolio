import "./globals.css";

export const metadata = {
  title: "Puneet Sandhu",
  description: "Web developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-neutral-950">{children}</body>
    </html>
  );
}
