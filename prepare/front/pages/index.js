import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
//components
import AppLayout from '../components/AppLayout';
import Image from 'next/image';

const TuiEditor = dynamic(() => import('../components/TuiEditor'), { ssr: false });

export default function Home({}) {
  return (
    <AppLayout>
      <Head>
        <title>WYSIWYG</title>
        {/* <link rel="icon" href="/heart.ico" />
        <meta name="title" property="og:title" content="next/wysiwyg/W" key="ogtitle" />
        <meta name="description" property="og:description" content="page for using wysiwyg" key="ogdes" />
        <meta name="image" property="og:image" content="/images/profile.jpeg" key="ogimage" />
        <meta name="url" property="og:url" content="http://localhost:3061" key="ogurl" /> */}
      </Head>

      <TuiEditor />

      <Image
        priority
        src="/front/components/images/pexels-pixabay-262325.jpeg"
        // className={utilStyles.borderCircle}
        height={24}
        width={24}
      />
    </AppLayout>
  );
}
