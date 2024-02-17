import styled from "styled-components";

export const Button = styled.div`
    background-color: red;
    color: #fff;
    padding: .9rem 1.5rem;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 2rem;
    filter: drop-shadow(0 0 0.22rem gray);

    :hover {
        /* opacity: .8; */
        cursor: pointer;
        transform: scale(1.05);
        transition: all ease-in-out .3s;
    }
`;