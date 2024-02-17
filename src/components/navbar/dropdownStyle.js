import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../themes";

const { primaryColor } = colors;

export const Wrapper = styled.div`
    // &.submenu{

    //     width: 10rem;
    //     position: absolute;
    //     list-style-type: none;
    //     background: ${primaryColor};
    // }
`

export const CompanySubMenu = styled.ul`
    &.submenu{

        width: 10rem;
        position: absolute;
        left: 0;
        top: 100%;
        list-style-type: none;
        background: ${primaryColor};
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        // z-index: 1;
    }

    &.clicked {
        display: none;
    }
`

export const SubMenuItems = styled.li`

    hover {
        background: #E74D70;
        color: #fff;
    }
`;
export const MenuItem = styled(Link)`
    display: block;
    width: 100%;
    color: white;
    font-weight: 400;
    font-size: 14px;
    padding: .4rem .6rem;
`;