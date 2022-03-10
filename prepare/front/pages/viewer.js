import dynamic from 'next/dynamic';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const TuiViewer = dynamic(() => import('../components/TuiViewer'), { ssr: false });

export default function PostWithTuiEditor({}) {
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

      <TuiViewer />
    </AppLayout>
  );
}
