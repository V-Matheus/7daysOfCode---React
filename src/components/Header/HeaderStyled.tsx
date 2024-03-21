import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: grid;
  grid-column: 3 / 5;
  grid-row: 1;

  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.5px;
  text-align: left;

  nav {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    ul {
      display: flex;
      align-items: center;
      gap: 50px;
    }

    li:nth-child(-n + 4)::after {
      content: '/';
      font-size: 20px;
      position: relative;
      left: 25px;
    }
  }
`;