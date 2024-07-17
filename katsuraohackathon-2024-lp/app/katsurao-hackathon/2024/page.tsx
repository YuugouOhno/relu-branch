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
