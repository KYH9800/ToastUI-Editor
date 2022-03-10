import React from 'react';
import dynamic from 'next/dynamic';
//components
import AppLayout from '../components/AppLayout';

const TuiEditor = dynamic(() => import('../components/TuiEditor'), { ssr: false });

const Home = () => {
  return (
    <AppLayout>
      <TuiEditor />
    </AppLayout>
  );
};

export default Home;
