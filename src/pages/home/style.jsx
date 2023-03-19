import styled from "styled-components";

export const Title = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0 1rem;

  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  max-width: 100%;
  margin: 0 auto;

  div {
    width: 21%;
    color: #fff;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #111;
    padding: 1rem;
  }
  img {
    max-width: 100%;
    display: flex;
    margin: 0 auto 30px;
  }
  h2 {
    margin-bottom: 1.5rem;
    font-size: 22px;
  }
  a {
    background-color: #f7d354;
    border: 2px solid #f7d354;
    border-radius: 4px;
    color: #000;
    padding: 1rem 0.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: transparent;
      color: #f7d354;
    }
  }
  svg {
    font-size: 1.2rem;
    color: #f7d354;
  }
  p {
    line-height: 1.4rem;
  }

  @media (min-width: 375px) and (max-width: 500px) {
    max-width: 80%;
    div {
      width: 100%;
    }
    h2 {
      margin-bottom: 1.5rem;
      font-size: 16px;
    }
    a {
      padding: 0.8rem;
    }
  }

  @media (min-width: 500px) and (max-width: 992px) {
    div {
      width: 30%;
    }
    h2 {
      margin-bottom: 1.5rem;
      font-size: 16px;
    }
    a {
      padding: 0.8rem;
    }
  }

  @media (min-width: 1024px) {
    div {
      width: 22%;
    }
  }
`;
