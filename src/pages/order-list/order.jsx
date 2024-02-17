import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Container, Section, QouteContainer, Text, Form, InputContainer, Input, Dropzone, SubmitBtn, UploadContainer, Phone, Contact, Mail, Top } from './style';
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { FiLock } from 'react-icons/fi';
import { FaRegEnvelope, FaArrowAltCircleLeft } from 'react-icons/fa';
import NewsLetter from '../../components/Newsletter'
import productImage from '../../assests/featured-product2.png'
import caretUp from '../../assests/quote/caret-up.png'
import caretDown from '../../assests/quote/caret-down.png'
import trashSimple from '../../assests/quote/TrashSimple.png'
import {
    QuoteSectionHeading,
    QuotesProductSection,
    QuotProductHeading,
    QuoteProducts,
    ProductImage,
    ProductQuantity,
    AddRemove,
    DeleteQuoteItem,
    ProductImageWrapper,
    CheckoutWrapper,
    ContinueShopping,
    Checkout
} from './style'


const Order = () => {
    const navigate = useNavigate();

    function handleClick() {
      navigate(-1);
    }

    const [selectedFile, setSelectedFile] = useState(null);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setSelectedFile(e.dataTransfer.files[0]);
    };

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const handleFileUpload = () => {
        // code to upload file
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            
            fetch('https://example.com/upload', {
              method: 'POST',
              body: formData
            })
              .then(response => response.json())
              .then(data => {
                console.log('File uploaded:', data);
                // handle success
              })
              .catch(error => {
                console.error('Error uploading file:', error);
                // handle error
              });
          } else {
            console.error('No file selected');
            // handle error
          }
    };

  return (
    <Container>
        <Section>
            <FaArrowAltCircleLeft onClick={handleClick} className='back'/>

            <QouteContainer>
                <QuoteSectionHeading>
                    <h4>My Order Items</h4>
                </QuoteSectionHeading>
                <QuotesProductSection>
                    <QuotProductHeading>
                        <span>Product</span>
                        <span>Quantity</span>
                    </QuotProductHeading>
                    <QuoteProducts>
                        <ProductImage>
                            <ProductImageWrapper>
                                <img src={productImage}/>
                            </ProductImageWrapper>
                            <h6>Micro Centrifuge</h6>
                        </ProductImage>
                        <ProductQuantity>
                            <AddRemove>
                                <span>1</span>
                                <div>
                                    <img src={caretUp} />
                                    <img src={caretDown}/>
                                </div>
                            </AddRemove>
                            <DeleteQuoteItem>
                                <div><img src={trashSimple}/></div>
                                <span>Delete From List</span>
                            </DeleteQuoteItem>
                        </ProductQuantity>
                    </QuoteProducts>

                    <CheckoutWrapper>
                        <ContinueShopping>
                            <a href='#'>Continue shopping</a>
                        </ContinueShopping>
                        <Checkout>
                            <button>Checkout all items</button>
                        </Checkout>
                    </CheckoutWrapper>    
                </QuotesProductSection>

                <NewsLetter />
            </QouteContainer>

        </Section>
    </Container>
  )
}

export default Order