import Image from "next/image";
import React,{ useState, useEffect } from 'react';
import Container from './component/Container';
import ReactDOM from 'react-dom';
import Navbar from './component/Navbar.client';
import Entry from './component/Entry';

export default function Home() {
  return (
    <main>
      <div className="background-image"></div> {/* 背景画像 */}
      <Container imageUrl="/page1.png" navbar={<Navbar />}>
        <div className="text-4xl text-center items-center justify-center h-2/3screen z-10 relative">
          <Image
            src="/title.png"
            alt="title"
            width={600}
            height={300}
          />
        </div>
      </Container>
      <Container imageUrl="/page-black.png" title="About" subTitle="概要">
        <p className="md:text-2xl  mb-0 ml-32 mr-32">福島にある<span className="text-green-400">葛尾村</span>という集落を舞台に<span className="text-green-400">地域密着型</span>のハッカソンを開催します！
          村でエビの養殖をしている<span className="text-red-400">株式会社HANERU葛尾様</span>での業務体験・ヒアリングから<span className="text-red-400">要件定義</span>を行い、ユーザーを意識した<span className="text-red-400">実践的な開発経験</span>を積むことができます！</p>
      </Container>
      <Container imageUrl="/page-orange.png">
        <p>アピールポイント</p>
      </Container>
      <Container imageUrl="/page-green.png" title="Schedule" subTitle="スケジュール">
        <div className="text-4xl text-center items-center justify-center md:h-2/3screen h-screen z-10 relative">
          <Image
              className="md:block hidden"
              src="/スケジュール(PC).png"
              alt="schedule"
              width={600}
              height={300}
          />
          <Image
              className="md:hidden block"
              src="/スケジュール(モバイル).png"
              alt="schedule"
              width={600}
              height={300}
          />
        </div>
      </Container>
      <Container imageUrl="/page-black.png" title="Entry" subTitle="募集要項">
        <Entry/>
      </Container>
      <Container imageUrl="/page-orange.png">
        <div className="h-screen flex flex-col justify-center items-center">
          <p className="text-3xl">かつらお(葛尾)とは？</p>
          <p className="md:text-2xl mb-0 ml-32 mr-32">
            葛尾村は、福島県浜通りの阿武隈山系に属し、双葉郡の最北端に位置します。村の集落は、これらの河川の沿岸に形成され、標高は300m〜600mと高く、緑も多く空気も綺麗で、高原地帯の中に住居が点在しているのが特徴で、移住に特化した住みやすい場所です。震災では全村避難となり、一度全村ゼロになった葛尾村では、何も無かったからこそ、何かできる可能性が無限。現在では、新しいことにどんどんチャレンジする人や、若年層の移住者が徐々に増えてきています。
          </p>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516719.55285978963!2d140.51802423273054!3d37.48556511020933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60208c815aeb546d%3A0x90a44d09df53b9a6!2z56aP5bO255yM5Y-M6JGJ6YOh6JGb5bC-5p2R!5e0!3m2!1sja!2sjp!4v1719050180912!5m2!1sja!2sjp" 
          width="600" 
          height="450" 
          className="border-0" 
          loading="lazy">
          </iframe>
        </div>
      </Container>
      <Container imageUrl="/page-green.png" title="Sponsor" subTitle="協賛">
        <p>概要です。</p>
      </Container>
    </main>
  );
}
