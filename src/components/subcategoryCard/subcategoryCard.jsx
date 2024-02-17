import React from 'react'
import CaretIcon from '../../assests/Caret.png'

import {SubCategoriesContainer, SubCategoriesWrapper, SubCategoriesCardHeading, SubCategoriesCard, SubCategoriesList} from './style'


const categoryData = [
    {
      id: 1,
      title: 'Centrifuge',
      subCategories: [
        'Analytical and High-Tech Equipment',
        'Autoclave',
        'Balances, Weighing',
        'Baths and Circulators',
        'Burners',
        'Bomb Calorimeter',
        'Centrifuges'
      ]
    },
    {
        id: 2,
        title: 'Centrifuge',
        subCategories: [
          'Analytical and High-Tech Equipment',
          'Autoclave',
          'Balances, Weighing',
          'Baths and Circulators',
          'Burners',
          'Bomb Calorimeter',
          'Centrifuges'
        ]
    },
    {
        id: 3,
        title: 'Centrifuge',
        subCategories: [
          'Analytical and High-Tech Equipment',
          'Autoclave',
          'Balances, Weighing',
          'Baths and Circulators',
          'Burners',
          'Bomb Calorimeter',
          'Centrifuges'
        ]
      },
      {
        id: 4,
        title: 'Centrifuge',
        subCategories: [
          'Analytical and High-Tech Equipment',
          'Autoclave',
          'Balances, Weighing',
          'Baths and Circulators',
          'Burners',
          'Bomb Calorimeter',
          'Centrifuges'
        ]
      }
    
]

function subcategoryCard() {
  return (
    <SubCategoriesContainer>    
        {categoryData.map((item, key) => (
        <SubCategoriesCard>
            <SubCategoriesCardHeading>
            <h4>{item.title}</h4>
            </SubCategoriesCardHeading>
            <SubCategoriesList>
            {item.subCategories.map((value) => (    
                <li key={key}>
                <span>{value}</span>
                <img src={CaretIcon}/>
                </li>
            ))}
            </SubCategoriesList>
        </SubCategoriesCard>
        ))}
    </SubCategoriesContainer>
  )
}

export default subcategoryCard