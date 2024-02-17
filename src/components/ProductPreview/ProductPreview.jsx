import React from 'react'
import { Grid } from './style'
import autoclave from '../../assests/autoclave.png';



import Product from '../../components/product'

const productData = [
  {
    text: 'Autoclave',
    image: 'autoclave'
  },
  {
    text: 'Contrifuge',
    image: 'autoclave'
  },
  {
    text: 'Density Meter',
    image: 'autoclave'
  },
  {
    text: 'Freezer',
    image: 'autoclave'
  },
  {
    text: 'Laboratory Mixers',
    image: 'autoclave'
  },
  {
    text: ' Microumes',
    image: 'autoclave'
  },
  {
    text: 'Spray Dryers',
    image: 'autoclave'
  },
  {
    text: 'Sealer',
    image: 'autoclave'
  },
  {
    text: 'Laboratory Mixers',
    image: 'autoclave'
  },
  {
    text: ' Microumes',
    image: 'autoclave'
  },
  {
    text: 'Spray Dryers',
    image: 'autoclave'
  },
  {
    text: 'Sealer',
    image: 'autoclave'
  },
]

const ProductPreview = () => {
  return (
    <div>
        <Grid>
          {productData.map((item, index) => (
              <Product text={item.text} image={autoclave} key={item.text + index} />
          ))}
            
        </Grid>
    </div>

  )
}

export default ProductPreview