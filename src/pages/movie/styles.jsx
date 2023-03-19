import styled from "styled-components";

export const Card = styled.div`
  color: #fff;
  display: grid;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem auto;

  @media (max-width: 450px) {
    padding: 0 2rem;
  }
`;

export const Image = styled.img`
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Info = styled.p`
  margin-bottom: 1rem;
  gap: 0.4rem;
`;

export const Tagline = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

export const Divinfo = styled.div`
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: #f7d354;
  }
`;
