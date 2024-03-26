import { styled } from '@mui/system';

export const LayoutStyled = styled('main')(
  ({ theme }) => `
      background: linear-gradient(143deg, rgba(179,214,255,1) 0%, rgba(255,220,179,0.5480786064425771) 100%, rgba(244,246,253,1) 100%);
      width: 100vw;
      height: 100vh;
      margin: 0;
      position: relative;
      display: flex;
      padding: 0 20px;
      overflow: scroll;
      padding: ${theme.spacing(6)};
  `
);

export const InfoUserStyled = styled('div')`
  display: inline-block;
  position: absolute;
  right: 0;
  text-align: right;
`;
