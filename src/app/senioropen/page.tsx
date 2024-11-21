import React from 'react';
import Head from 'next/head';
import SeniorOpen from '@/components/SeniorOpen/SeniorOpen';


const SeniorOpenPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Senior Open presented by Rolex</title>
      </Head>
      <SeniorOpen />
    </>
  );
}

export default SeniorOpenPage;
