import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: grid;
  grid-column: 3 / 5;

  nav {
    width: 100%;
    margin: auto;
    padding: 50px 0;
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
