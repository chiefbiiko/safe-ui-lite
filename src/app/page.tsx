'use client';

import { WalletTypography } from '@/ui-kit/wallet-typography';
import ConnectButton from '@/common/connect-button';
import { WalletLayout } from '@/ui-kit';

import { ImageStyled, MainContainerStyled } from './home-page.styles';

export default function Home() {
  return (
    <WalletLayout hideSidebar>
      <MainContainerStyled>
        <WalletTypography component="h1" fontSize={36} fontWeight={700} fontFamily="Inter">
          What it is?
        </WalletTypography>
        <ImageStyled />
        <ConnectButton />
      </MainContainerStyled>
    </WalletLayout>
  );
}
