import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "かつらおハッカソン2024",
  description: "福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！村でエビの養殖をしている株式会社HANERU葛尾様での業務体験・ヒアリングから要件定義を行い、ユーザーを意識した実践的な開発経験を積むことができます！",
  keywords: "かつらおハッカソン, 葛尾, 葛尾村, ハッカソン",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
