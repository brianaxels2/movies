import styled from "styled-components";

export const Title = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0 1rem;

  span {
    color: #f7d354;
    text-transform: capitalize;
  }

  @media (min-width: 375px) and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
