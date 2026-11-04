import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader, SiteFooter } from "./site-shell";
import localFont from "next/font/local";
const brand = localFont({src:"./fonts/Nunito-Bold.ttf",variable:"--font-brand",weight:"700",display:"swap"});

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
    default: "PENTAWORKS | GE MRI 유지보수 · 장비 관리 솔루션",
    template: "%s | PENTA WORKS",
  },
  description:
    "주식회사 펜타웍스는 GE MRI 유지보수를 중심으로 정기점검과 장애 대응을 수행하며, 자체 장비 관리 제품 MReyes를 개발·운영합니다.",
  applicationName: "PENTA WORKS",
  robots: { index: false, follow: false },
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
    title: "PENTAWORKS | GE MRI 유지보수 · 장비 관리 솔루션",
    description: "GE MRI 유지보수와 정기점검, 펜타웍스의 장비 관리 제품 MReyes를 소개합니다.",
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
  themeColor: "#f8f7f3",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} ${brand.variable}`}><SiteHeader/>{children}<SiteFooter/></body>
    </html>
  );
}

