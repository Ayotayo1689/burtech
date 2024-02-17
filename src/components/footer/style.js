import styled from "styled-components";
import { colors } from "../../themes";
import backgroundImgae from '../../assests/footer-background.png'

const {textColor, primaryColor} = colors;

export const Container = styled.div`
    background: #101E33;
;
    color: white;
    /* border: 1px solid; */
`;
export const Section = styled.div`
    padding: 1.6rem 1.2rem;

    :first-of-type {
        margin-right: 1.6rem;
    }
    h3 {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        color: #2379C2;
    }
    h4 {
        font-size: 15px;
        font-weight: 500;
    }
    ul {
        list-style: none;
        a {
            // color: #99989e;
            color: #FFFFFF;

            text-decoration: none;
            
            display: inline-flex;
            align-items: center;
            transition: .3s linear;
            font-size: 14px;
            ::before {
                content: "";
                display: block;
                height: 1px;
                width: 0;
                background: #fff;
                margin-right: 0;
                transition: .3s linear;
            }
            :hover {
                color: #fff;
                ::before {
                    content: "";
                    display: block;
                    height: 1px;
                    width: 10px;
                    background: #fff;
                    margin-right: 5px;
                }
            }
        }
    }
    
    p {
        font-size: 14px;
        margin-bottom: 1.4rem;
        text-align: start;
        width: 100%;
    }
    form {
        height: 50px;
        width: 100%;
        margin-top: 30px;
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        input {
            outline: none;
            height: 100%;
            width: 60%;
            background: white;
            color: ${textColor};
            border: none;
            padding: 0 15px;
        }
        button {
            height: 100%;
            width: 40%;
            border: none;
            background: ${primaryColor};
            color: white;
            cursor: pointer;
        }
    }
`;
export const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    max-width: 1300px;
    padding: 50px 0;
`;
export const Top = styled.div`
    display: grid;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }
    `;
export const Bottom = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #151616;
    padding: 15px 0;
    font-size: 14px;
    font-weight: 500;
    background: #fff;
    ;

    a {
        color: #2379C2;
        margin-left: 10px;

        :hover {
            text-decoration: underline;
        }
    }


    @media (max-width: 576px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;

        padding-bottom: .9rem;
    }
`;
export const QuickLink = styled.div`
    display: flex;
    align-items: center;
    a {
        font-size: 14px;
        font-weight: 500;
        margin-left: 15px;
    }
    span {
        /* height: 3px;
        width: 3px; */
        /* border-radius: 50%;
        background: #99989e; */
        margin-left: 15px;
    }
    @media (max-width: 576px) {
        display: flex;
        justify-content: center;
        margin-top: .6rem;
        margin-bottom: 2rem;
    }
`;
export const Logo = styled.img`
    margin-bottom: 25px;
    height: 50px;
`;
export const SocialLinks = styled.div`
    padding: 5px 0;
`;
export const SocialLink = styled.a`
    display: inline-flex;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    margin-right: 20px;
    background: ${primaryColor};
    color: white !important;
    ::after {
        content: "";
        display: block;
        height: 150%;
        width: 150%;
        position: absolute;
        transform: rotate(45deg);
        background-color: ${primaryColor};
        top: -76%;
        right: -76%;
        transition: .3s linear;
    }
    ::before {
        content: "";
        display: block;
        height: 150%;
        width: 150%;
        position: absolute;
        transform: rotate(45deg);
        background-color: ${primaryColor};
        top: 18%;
        right: 36%;
        transition: .3s linear;
    }
    svg {
        z-index: 99;
        /* color: ${primaryColor}; */
    }
    :hover {
        color: ${primaryColor} !important;
        ::after {
            top: -152%;
            right: -152%;
            background-color: white;
            color: ${primaryColor};
        }
        ::before {
            top: 100%;
            right: 100%;
            background-color: white;
            color: ${primaryColor};
        }
    }
`;
export const Box = styled.div`
    display: flex;
    justify-content:  flex-start;
    flex-direction: column;

    h4 {
        font-weight: bold;
        margin-bottom: 10px;
    }
`
export const PoweredBy = styled.div`
    text-align: center;
    margin-top: 2rem;
    font-size: 14px;
    font-weight: 500;

    a {
        font-weight: 400;
        :hover {
            text-decoration: underline;
            /* color: ${primaryColor}; */
        }
    }

    @media (max-width: 576px) {
        margin-bottom: 2rem;
    }

`;