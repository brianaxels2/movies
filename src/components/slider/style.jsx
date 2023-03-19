import styled from "styled-components";

export const Image = styled.img`
    margin-bottom: 1rem;

    @media (min-width: 320px) {
        width: 200px;
    }
    @media (min-width: 768px) {
        width: 250px;
    }
    @media (min-width: 992px) {
        width: 350px;
    }
    @media (min-width: 1024px) {
        width: 450px;
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

export const DivInfo = styled.div`
    width: 100%;
    height: 600px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #111;
    padding: 1rem;
    margin: 0rem 2rem 2rem 1rem;
    align-items: center;
    
    img {
        max-width: 100%;
    }
    h2 {
        margin-bottom: 1.5rem;
        font-size: 22px;
        align-items: center;
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
        width: 100%;

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

    @media (max-width: 450px) {
        height: 400px;
        margin: 0.5rem 2rem 2rem 1rem;
        h2 {
            font-size: 16px;
        }
        a {
            padding: 0.8rem;
        }
    }

    @media (max-width: 768px) {
        height: 500px;
        margin: 0.5rem 2rem 2rem 1rem;
        h2 {
            font-size: 16px;
        }
        a {
            padding: 0.8rem;
        }
    }
`;