import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-column: 3;
  grid-row: 2;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .heroContent {
    display: flex;
    flex-direction: column;
    gap: 10px;
    grid-column: 2;
  }

  .heroImg {
    grid-column: 3;
    width: 550px;
    height: 1000px;
    background-image: url(src/assets/imagem-hero1.png);
    background-position: -200px -400%;
    background-repeat: no-repeat;
  }
`;
