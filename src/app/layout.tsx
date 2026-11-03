import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
    default: "MReyes | 펜타웍스 장비 모니터링 · 현장 업무",
    template: "%s | PENTA WORKS",
  },
  description:
    "병원 장비의 측정값부터 업무기록, 일정과 정비이력까지. 펜타웍스의 MReyes로 현장 업무를 연결하세요.",
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
    title: "MReyes | 펜타웍스 장비 모니터링 · 현장 업무",
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${brand.variable}`}>{children}</body>
    </html>
  );
}

