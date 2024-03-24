import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  grid-column: 2 / 5;
  grid-row: 2 / 4;
  justify-content: center;

  .heroContent {
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    gap: 30px;
    width: 90%;

    span {
      font-family: Montserrat;
      color: #8a8a8a;
      font-size: 22px;
      font-weight: 400;
      line-height: 26.82px;
      text-align: left;
    }

    h1 {
      width: 375px;
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
    background-color: #ffffff;
    padding-left: 5px;
    position: relative;

    font-family: Montserrat;
    font-size: 1rem;
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
      width: 50%;
      padding: 0px 1rem;
      align-items: center;
      justify-content: center;
      background-color: #ffcb47;
      color: #ffffff;
    }

    span {
      position: absolute;
      top: 100px;

      font-family: Montserrat;
      font-size: 14px;
      color: red;
    }
  }

  .heroImg {
    width: 100%;
    background-image: url(src/assets/imagem-hero1.png);
    background-position: -12.25rem -5.25rem;
    background-repeat: no-repeat;
  }
`;
