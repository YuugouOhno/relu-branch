import Head from 'next/head'
import Image from "next/image";
import React,{ useState, useEffect } from 'react';
import Container from '../../component/Container';
import ReactDOM from 'react-dom';
import Navbar from '../../component/Navbar.client';
import Entry from '../../component/Entry';
import About from '../../component/About';
import Appeal from '../../component/Appeal';
import Katsurao from '../../component/Katsurao';
import Schedule from '../../component/Schedule';
import Sponsors from '../../component/Sponsors';
import FixedButton from '../../component/FixedButton';


export default function Home() {
  return (
    <>
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
      <main>
        <FixedButton/>
        <div className="background-image"></div> {/* 背景画像 */}
        <Container navbar={<Navbar />} backgroundColor="bg-c-green-orange">
          <div className="h-screen  flex flex-col items-center justify-center ">
            <Image src="/title.png" alt="title" width={600} height={300}/>
          </div>
        </Container>

        <Container title="About" subTitle="-かつらおハッカソンって何？-" backgroundColor="bg-c-white">
          <About/>
        </Container>      
        <Container title="Appeal" subTitle="魅力" backgroundColor="bg-c-gray">
          <Appeal/>
        </Container>
        <Container title="Schedule" subTitle="スケジュール" backgroundColor="bg-c-white">
          <Schedule/>
        </Container>
        <Container title="Entry" subTitle="募集要項" backgroundColor="bg-c-gray">
          <Entry/>
        </Container>
        <Container backgroundColor="bg-c-white">
          <Katsurao/>
        </Container>
        <Container title="Sponsor" subTitle="協賛" backgroundColor="bg-c-gray">
          <Sponsors/>
        </Container>
        <Container title="" subTitle="かつらおハッカソン事業について" backgroundColor="bg-c-yayagray">
        <div id="福島イノベ機構" className="flex flex-col items-center my-20">
              <p className="font-bold md:font-light text-sm md:text-xl mb-6 md:ml-32 md:mr-32 mr-8 ml-8">本事業は、福島イノベーション・コースト構想イノベ地域における交流・関係人口拡大推進事業「地域の価値向上に向けたブラッシュアップ事業」に選定され、実施しております。</p>
              <a href="https://www.fipo.or.jp/" target="_blank" className="border-b-2 border-black-300 hover:text-gray-300">福島イノベ機構についてはこちら</a>
          </div>
        </Container>

      </main>
    </>
  );
}
