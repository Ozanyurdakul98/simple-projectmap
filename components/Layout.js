import Head from 'next/head';
import React from 'react';
//components
//styles
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <div className='bg-site relative'>
      <Head>
        <title>Tonstudio-Kleinanzeigen</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledMain className='container'>{children}</StyledMain>
      <StyledFooter>Ozan leon yurdakul</StyledFooter>
    </div>
  );
}

const StyledHeader = styled.header``;
const StyledMain = styled.main`
  margin: 0 auto;
`;
const StyledFooter = styled.footer`
  margin-top: 300px;
  text-align: center;
`;
