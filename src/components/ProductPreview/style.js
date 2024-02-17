import styled from "styled-components";
import { colors } from "../../themes";

export const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        justify-content: center;
        padding: 2rem 0;


    .product-img{
        /* width: 400px;
        height: 400px; */
        border-radius: 5px;
        background-color: lightgray;
    }
`;