import Head from 'next/head'
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

export const dynamic = 'force-dynamic'

const inter = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "かつらおハッカソン",
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
    images: [
      {
        url: 'https://relu-branch.com/katsurao-hackathon/2024/thumbnail.jpg',  // 相対パス
        width: 800,
        height: 600,
        alt: 'サムネイル画像の説明',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'かつらおハッカソン2024',
    description: '福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！',
    images: 'https://relu-branch.com/katsurao-hackathon/2024/thumbnail.jpg',
  },
  verification: {
    google: 'mgjC376pDDqXAumrXz_j8QTxHQ3hJBXxEz6fMJNfExk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>かつらおハッカソン2024</title>
        <meta name="description" content="福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！村でエビの養殖をしている株式会社HANERU葛尾様での業務体験・ヒアリングから要件定義を行い、ユーザーを意識した実践的な開発経験を積むことができます！" />
        <meta name="keywords" content="かつらおハッカソン, 葛尾, 葛尾村, ハッカソン" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="かつらおハッカソン2024" />
        <meta property="og:description" content="福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！" />
        <meta property="og:url" content="https://relu-branch.com/katsurao-hackathon/2024" />
        <meta property="og:site_name" content="かつらおハッカソン2024" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://relu-branch.com/katsurao-hackathon/2024/thumbnail.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="サムネイル画像" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="かつらおハッカソン2024" />
        <meta name="twitter:description" content="福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！" />
        <meta name="twitter:image" content="https://relu-branch.com/katsurao-hackathon/2024/thumbnail.jpg" />
        <meta name="google-site-verification" content="mgjC376pDDqXAumrXz_j8QTxHQ3hJBXxEz6fMJNfExk" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}