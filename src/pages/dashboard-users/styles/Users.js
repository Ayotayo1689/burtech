import styled from "styled-components";
import { colors } from "../../../themes";

const { primaryColor } = colors;

export const Container = styled.div`
	padding: 1rem;
`;
export const Title = styled.h2`
	font-weight: 600;
	font-size: 30px;
	line-height: 41px;
	text-align: start;
`;
export const Pages = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2.5rem;
    .pages {
        display: flex;
        align-items: center;

        font-size: 14px;
        font-weight: 500;
    }
`;
export const AddButton = styled.button`
	padding: .5rem 1rem;
    border-radius: 6px;

    background-color: ${primaryColor};
    color: #fff;

    font-size: 14px;
`;

export const CardContainer = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`;