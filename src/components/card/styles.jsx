import styled from "styled-components";

export const Card = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  margin-bottom: 1rem;

  @media (min-width: 320px) {
    width: 200px;
  }
  @media (min-width: 768px) {
    width: 250px;
  }
  @media (min-width: 992px) {
    width: 300px;
  }
  @media (min-width: 1024px) {
    width: 400px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Info = styled.p`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  svg {
    color: #f7d354;
    margin-right: 5px;
  }
`;
