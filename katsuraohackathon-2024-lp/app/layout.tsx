import Head from 'next/head'
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

export const dynamic = 'force-dynamic'

const inter = Noto_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "",
//   description: "福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！村でエビの養殖をしている株式会社HANERU葛尾様での業務体験・ヒアリングから要件定義を行い、ユーザーを意識した実践的な開発経験を積むことができます！",
//   keywords: "かつらおハッカソン, 葛尾, 葛尾村, ハッカソン",
//   robots: "index, follow",
//   openGraph: {
//     title: "かつらおハッカソン2024",
//     description: "福島にある葛尾村という集落を舞台に地域密着型のハッカソンを開催します！",
//     url: 'https://relu-branch.com/katsurao-hackathon/2024',
//     siteName: "かつらおハッカソン2024",
//     locale: 'ja_JP',
//     type: "website", // 必須プロパティ
//     images: [
//       {
//         url: 'https://katsuraohackathon-2024-b7r2kv0v1-yuugouohnos-projects.vercel.app/opengraph-image.png?d3a7edbcfc4748f1=',  // 相対パス
//         width: 800,
//         height: 600,
//         alt: 'サムネイル画像の説明',
//       },
//     ],
//   },
// };

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
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
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
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="サムネイル画像の説明" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
