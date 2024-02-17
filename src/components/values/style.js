import styled from "styled-components";

export const Image = styled.img`
    width: 85px;
    height: 85px;

    @media (max-width: 576px) {
        width: 60px;
        height: 60px;
    }
    `;
export const Title = styled.h3`
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
    margin: 1.2rem 0;
    
    /* Neutral/80% */
    color: #2B2C2D;
    @media (max-width: 576px) {
        margin: .6rem ;
        font-size: 22px;
    }
    `;
export const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    
    text-align: center;
    @media (max-width: 576px) {
        font-size: 14px ;
    }
    `;
export const Value = styled.div`
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: 6px;
    background: #fff;
    /* box-shadow: -1px 1px 4px 1px rgba(0, 0, 0, 0.26); */

    :hover {
        box-shadow: 0px 0px 37px -11px rgba(0,0,0,0.22);
        cursor: pointer;
        transition: all ease-in-out .3s;
    }
    @media (max-width: 576px) {
        padding: 1rem .8rem ;
    }
`;