import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: #121212;

  @media (max-width: 375px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    padding: 1.5rem 0.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
`;

export const Button = styled.button`
  background-color: #f7d354;
  border: 2px solid #f7d354;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #000;
  padding: 0.3rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: transparent;
    color: #f7d354;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 375px) {
    margin: 0 0 15px 0
  }
`;

export const Input = styled.input`
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 7px 10px;
`;
