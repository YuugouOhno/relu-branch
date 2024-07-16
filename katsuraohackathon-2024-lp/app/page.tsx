'use client'; // Add this directive to indicate this is a client component
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://relu-branch.com/katsurao-hackathon/2024');
  }, [router]);

  return null; // ページコンテンツは不要なのでnullを返します
}