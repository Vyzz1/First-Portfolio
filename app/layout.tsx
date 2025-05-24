import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Huỳnh Khang Vỹ Portfolio",
  description:
    "Explore Huỳnh Khang Vỹ's portfolio, a passionate student showcasing modern, minimalist, and inspiring design projects.",
  openGraph: {
    title: "Huỳnh Khang Vỹ Portfolio",
    description:
      "Explore Huỳnh Khang Vỹ's portfolio, a passionate student showcasing modern, minimalist, and inspiring design projects.",
    url: "https://huynh-khang-vy.vercel.app",
    siteName: "Huỳnh Khang Vỹ Portfolio",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dl8h3byxa/image/upload/v1748093680/473346275_4222714344616696_8111006687165331402_n.jpg_pksfog.jpg",
        width: 1200,
        height: 630,
        alt: "Huỳnh Khang Vỹ Portfolio",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
