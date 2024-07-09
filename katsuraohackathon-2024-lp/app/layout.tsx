import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "かつらおハッカソン2024",
  description: "福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！村でエビの養殖をしている株式会社HANERU葛尾様での業務体験・ヒアリングから要件定義を行い、ユーザーを意識した実践的な開発経験を積むことができます！",
  keywords: "かつらおハッカソン, 葛尾, 葛尾村, ハッカソン",
  robots: "index, follow",
  openGraph: {
    title: "かつらおハッカソン2024",
    description: "福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！",
    images: [
      {
        url: '/thumbnail.png',
        width: 800,
        height: 600,
        alt: 'サムネイル画像の説明',
      },
    ],
    url: 'https://relu-branch.com/katsurao-hackathon/2024',
  },
  twitter: {
    card: "summary_large_image",
    title: "かつらおハッカソン2024",
    description: "福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！",
    images: [
      {
        url: '/thumbnail.png',
        alt: 'サムネイル画像の説明',
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
      <Head>
        <title>かつらおハッカソン2024</title>
        <meta name="description" content="福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！村でエビの養殖をしている株式会社HANERU葛尾様での業務体験・ヒアリングから要件定義を行い、ユーザーを意識した実践的な開発経験を積むことができます！" />
        <meta name="keywords" content="かつらおハッカソン, 葛尾, 葛尾村, ハッカソン" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="かつらおハッカソン2024" />
        <meta property="og:description" content="福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://relu-branch.com/katsurao-hackathon/2024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="かつらおハッカソン2024" />
        <meta name="twitter:description" content="福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！" />
        <meta name="twitter:image" content="/thumbnail.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
