import styled from "styled-components";
import { colors } from "../../themes";
import backgroundImage from '../../assests/category-page-background.png'

const { primaryColor } = colors


export const SubCategoriesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 41px;
    padding: 2rem 3rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage});
    background-size: cover;
    background-position: center;
    width: 100%;
`
export const SubCategoriesWrapper = styled.div`
    > h4{
        font-size: 24px;
        color:  #151616;
    }
`
export const SubCategoriesCard = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: -1px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-top: 25px;
`
export const SubCategoriesCardHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 57px;
    background: #474F57;
    border-radius: 8px 8px 0 0;

    h4{
       font-size: 22px;
       color:#FFFFFF 
    }
`
export const SubCategoriesList = styled.ul`
    background: #FFFFFF;

    li{
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        gap: .7rem;
        align-items: center;
        padding: 10px 20px;
        cursor: pointer;
    }

    li span{
        font-size: 16px;
        color: #404243;
    }
`
