import Image from "next/image";
import React,{ useState, useEffect } from 'react';
import Container from './component/Container';
import ReactDOM from 'react-dom';
import Navbar from './component/Navbar.client';
import Entry from './component/Entry';
import About from './component/About';
import Katsurao from './component/Katsurao';
import Schedule from './component/Schedule';

export default function Home() {
  return (
    <main>
      <div className="background-image"></div> {/* 背景画像 */}
      <Container navbar={<Navbar />} backgroundColor="bg-c-green-orange">
        <div className="text-4xl text-center items-center justify-center h-2/3screen z-10 relative">
          <Image src="/title.png" alt="title" width={600} height={300}/>
        </div>
      </Container>
      <Container title="About" subTitle="概要" backgroundColor="bg-c-black">
        <About/>
      </Container>
      <Container backgroundColor="bg-c-orange">
        <p>アピールポイント</p>
      </Container>
      <Container title="Schedule" subTitle="スケジュール" backgroundColor="bg-c-green">
        <Schedule/>
      </Container>
      <Container title="Entry" subTitle="募集要項" backgroundColor="bg-c-black">
        <Entry/>
      </Container>
      <Container backgroundColor="bg-c-orange">
        <Katsurao/>
      </Container>
      <Container title="Sponsor" subTitle="協賛" backgroundColor="bg-c-green">
        <p>概要です。</p>
      </Container>
    </main>
  );
}
