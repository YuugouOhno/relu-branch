import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

export const dynamic = 'force-dynamic'

const inter = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "かつらおハッカソン2024",
  description: "福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！村でエビの養殖をしている株式会社HANERU葛尾様での業務体験・ヒアリングから要件定義を行い、ユーザーを意識した実践的な開発経験を積むことができます！",
  keywords: "かつらおハッカソン, 葛尾, 葛尾村, ハッカソン",
  robots: "index, follow",
  openGraph: {
    title: "かつらおハッカソン2024",
    description: "福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！",
    url: 'https://relu-branch.com/katsurao-hackathon/2024',
    siteName: "かつらおハッカソン2024",
    locale: 'ja_JP',
    type: "website", // 必須プロパティ
    // images: [
    //   {
    //     url: 'https://relu-branch.com//thumbnail.png',  // 相対パス
    //     width: 800,
    //     height: 600,
    //     alt: 'サムネイル画像の説明',
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "かつらおハッカソン2024",
  //   description: "福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！",
  //   images: [
  //     {
  //       url: 'https://relu-branch.com//thumbnail.png',  // 相対パス
  //       alt: 'サムネイル画像の説明',
  //     },
  //   ],
  // },
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
