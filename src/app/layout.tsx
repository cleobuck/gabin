import { Metadata } from "next";
import { Raleway } from "next/font/google";
import "@styles/global.scss";

const raleway = Raleway({
  display: "swap",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabinouze Events",
  description: " Location et installation de tentes de réception sur mesure ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
