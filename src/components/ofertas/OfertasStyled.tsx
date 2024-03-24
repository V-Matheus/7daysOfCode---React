import { styled } from 'styled-components';
import { colorPrimary } from '../../styles/stylesGlobais';

export const Container = styled.div`
  grid-column: 2/ 5;
  grid-row: 5;

  .ofertasTittle {
    display: flex;
    padding: 30px 0;
    justify-content: center;
    align-items: center;

    span {
      font-family: Montserrat;
      font-size: 22px;
      font-weight: 400;
      line-height: 26.82px;
    }

    h1 {
      font-size: 82px;
      font-weight: 900;
      line-height: 94.46px;
    }
  }

  .ofertasContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
  }

  .oferta {
    display: flex;
    text-align: center;
    width: calc(33.33% - 30px);
    overflow-y: hidden;

    h1 {
      font-family: Elsie Swash Caps;
      font-size: 32px;
      font-weight: 900;
      line-height: 36.86px;
      text-align: left;
    }
  }

  .ofertaImg {
    display: flex;
    scale: 1.2;
  }

  .ofertaContent {
    padding: 15px;
    display: flex;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    gap: 10px;
  }

  .ofertaButton {
    a {
      color: ${colorPrimary};
      display: inline-block;
      padding: 10px 0;
    }

    img {
      margin-left: 20px;
      width: 14px;
    }
  }
`;
