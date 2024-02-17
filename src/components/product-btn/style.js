import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: rgb(255,183,183);
    color: #000;

    padding: .5rem 1rem;
    margin-bottom: .8rem;

    text-align: center;

    svg {
        font-size: 14px;
        margin: 0 .6rem;
    }
    
    :hover {
        transition: all ease-in-out .2s;
    }
`;