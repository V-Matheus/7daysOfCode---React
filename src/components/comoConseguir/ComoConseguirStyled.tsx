import { styled } from 'styled-components';
import { colorPrimary } from '../../styles/stylesGlobais';

export const Container = styled.div`
  display: flex;
  grid-column: 3;
  grid-row: 4;
  background-color: #ffffff;

  .comoConseguirImg {
    overflow: hidden;

    img {
      scale: 1.1;
    }
  }

  .comoConseguirContent {
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
    justify-content: center;

    h1 {
      font-size: 42px;
      padding-bottom: 25px;
    }

    span {
      font-size: 22px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    li {
      position: relative;
      padding-left: 60px; /* Espaço para o círculo */
      line-height: 1.5; /* Ajuste conforme necessário */
    }

    li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 52px;
      height: 52px; /* Altura do círculo */
      background-color: ${colorPrimary}; /* Cor do círculo */
      border-radius: 50%; /* Forma do círculo */
    }
  }
`;
