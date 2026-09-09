import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pentaworks.net"),
  title: {
    default: "PENTA WORKS | MRI 모니터링 솔루션",
    template: "%s | PENTA WORKS",
  },
  description:
    "의료 현장의 장비 데이터를 연결하고 운영 상태를 한눈에 보여주는 PENTA WORKS 모니터링 솔루션입니다.",
  applicationName: "PENTA WORKS",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "PENTA WORKS",
    title: "PENTA WORKS | MRI 모니터링 솔루션",
    description: "장비 데이터와 운영 현장을 더 가깝게 연결합니다.",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "PENTA WORKS",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f6fb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}

