import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../themes";
const { textColor, primaryColor } = colors

export const Container = styled.div`
    background: #fff;
    /* min-height: 100vh; */
`;
export const Tabs = styled.div`
    height: 40px;
    padding: 0 30px;
`;
export const Tab = styled(Link)`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: ${primaryColor};
    padding: 0 20px;
    color: ${textColor};
    text-decoration: none;
    span {
        font-size: 14px;
    }
    svg {
        margin-right: 10px;
        font-size: 18px;
    }
`;
export const SubContent = styled.div`
    background: #f7f7f7;
    /* padding: 25px; */
    /* border-radius: 20px; */
    /* max-height: 75vh;
    overflow-y: scroll; */
`;