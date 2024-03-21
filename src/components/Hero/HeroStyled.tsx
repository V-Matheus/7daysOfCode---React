import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-column: 3;
  grid-row: 2;
  justify-content: center;
  overflow: hidden;

  .heroContent {
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    gap: 30px;
    grid-column: 2;

    span {
      font-family: Montserrat;
      color: #8a8a8a;
      font-size: 22px;
      font-weight: 400;
      line-height: 26.82px;
      text-align: left;
    }

    h1 {
      font-family: Elsie Swash Caps;
      font-size: 82px;
      font-weight: 900;
      line-height: 94.46px;
      text-align: left;
    }

    p {
      font-family: Montserrat;
      width: 450px;
      color: #8a8a8a;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      text-align: left;
    }
  }

  .heroBtn {
    display: flex;
    justify-content: space-between;
    height: 75px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.5px;
    text-align: left;

    div {
      display: inherit;
      gap: 10px;
      width: 100%;
    }

    input {
      width: 85%;
    }

    img {
      width: 24px;
    }

    button {
      display: flex;
      padding: 0px 1rem;
      align-items: center;
      justify-content: center;
      background-color: #ffcb47;
      color: #ffffff;
    }
  }

  .heroImg {
    grid-column: 3;
    width: 550px;
    height: 800px;
    background-image: url(src/assets/imagem-hero1.png);
    background-position: -180px -100px;
    background-repeat: no-repeat;
  }
`;
