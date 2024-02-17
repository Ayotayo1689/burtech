import styled from "styled-components";
import { colors } from "../../themes";

const { primaryColor } = colors;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	// justify-content: space-between;
	.back {
		font-size: 34px;
		align-self: flex-start;
		margin-left: 5rem;
	}
`;

export const Section = styled.section`
	padding: 5rem 0;
	display: flex;
	// justify-content: center;
	// align-items: center;
	flex-direction: column;
	// background: #f5f5f7;
`;
export const QouteContainer = styled.div`
	// width: 90%;
	// background: white;
	// box-shadow: 0px 40px 80px 0px #02021a24;

	// border-radius: 20px;
	// padding: 4rem 0;
	// margin: 30px auto;

	// display: flex;
	// justify-content: space-evenly;
	// align-items: flex-start;
	// flex-direction: row;

	// padding: 0 80px;
	margin-top: 4rem;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	span,
	p {
		color: #2b2c2d;
	}
`;

export const QuoteSectionHeading = styled.div`
	padding: 0 80px;

	h4 {
		font-size: 35px;
	}

	@media (max-width: 600px) {
		padding: 0 30px;

		h4 {
			font-size: 20px;
		}
	}
`;
export const QuotesProductSection = styled.div`
	margin-top: 2rem;
`;
export const QuotProductHeading = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 14rem;
	padding: 15px 80px;
	border-top: 1px solid rgba(0, 0, 0, 0.3);

	// border: 1px solid;
	> span {
		font-size: 18px;
	}

	@media (max-width: 600px) {
		display: none;
	}
`;
export const QuoteProducts = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16rem;
	margin-top: 1rem;
	padding: 15px 80px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);

	@media (max-width: 600px) {
		grid-template-columns: auto auto;
		gap: 0.5rem;
		padding: 10px 20px;
	}

	@media (min-width: 768px) {
		gap: 4rem;
		padding: 30px 20px;
	}

	@media (min-width: 992px) {
		gap: 16rem;
	}
`;
export const ProductImage = styled.div`
    display flex;
    align-items: center;
    gap: 49px;

    h6{
        font-size: 20px;
        font-weight: 600;
        color: #2B2C2D;
    }

    @media(max-width: 600px){
        flex-direction: column;
        align-items: start;
        gap: 20px;
        h6{
            font-size: 14px;
        }
    }

`;
export const ProductImageWrapper = styled.div`
	width: 175px;

	@media (max-width: 600px) {
		width: 80px;
	}
`;
export const ProductQuantity = styled.div`
	display: flex;
	// border: 1px solid;
	align-items: center;
	gap: 40px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 15px;
		margin-top: 1rem;
	}
`;
export const AddRemove = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 221px;
	padding-left: 15px;

	height: 54px;
	border: 1px solid #6b6f71;
	border-radius: 8px;

	span {
		font-weight: 400;
		font-size: 25px;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		height: 100%;
		// border: 1px solid;
		border-radius: 0 8px 8px 0;
		background: #d6dde1;
		width: 50px;

		> img {
			width: 15px;
			height: 9.5px;
			cursor: pointer;
		}
	}

	@media (max-width: 600px) {
		width: 200px;
	}
`;
export const DeleteQuoteItem = styled.div`
	display: flex;
	align-items: center;
	width: 221px;
	border: 1px solid;
	padding: 12px 15px;
	gap: 10px;
	border: 1px solid #e74d70;
	border-radius: 8px;
	cursor: pointer;

	span {
		font-weight: 700;
		font-size: 16px;
		color: #4688e4;
	}

	@media (max-width: 600px) {
		width: 100%;
		// padding: 12px;

		span {
			font-size: 14px;
		}
	}
`;

//---------Checkout or Continue shopping----------//
export const CheckoutWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 5rem 2rem 4.5rem;

	@media (max-width: 600px) {
		padding: 2rem 1rem;
	}
`;
export const ContinueShopping = styled.div`
	a {
		// text-decoration: underline;
		font-weight: 300;
		font-size: 20px;
		color: inherit;
		border-bottom: 1px solid;
	}

	@media (max-width: 600px) {
		a {
			font-size: 16px;
		}
	}
`;
export const Checkout = styled.div`
	button {
		background: #4e97fd;
		border-radius: 8px;
		cursor: pointer;
		text-transform: uppercase;
		padding: 12px 15px;
		color: #ffffff;
		font-size: 16px;
	}

	@media (max-width: 600px) {
		button {
			padding: 10px 12px;
			font-size: 12px;
		}
	}
`;

// export const Text = styled.div`
//     /* width: 50%; */
//     h2 {
//         font-size: 24px;
//         line-height: 32px;

//         color: ${primaryColor};
//     }
//     p {
//         /* font-size: 14px; */
//         line-height: 24px;
//         font-weight: 400;

//         margin-top: .6rem;
//         margin-bottom: 1.8rem;
//     }
// `;
// export const Mail = styled.div`
// `;
// export const Phone = styled.div`
// `;
// export const Contact = styled.div`
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     flex-direction: row;

//     margin-top: .6rem;

//     svg {
//         font-size: 24px;
//         margin-right: 1rem;
//     }
// `;
// export const Form = styled.form`

//     label {
//         color: #0d0b33;
//         display: inline-block;
//         padding-bottom: 10px;
//         font-weight: 500;
//     }
//     p {
//          font-size: 14px;
//     }
//     #terms {
//         display: flex;
//         input {
//             margin-right: 10px;
//             cursor: pointer;
//         }
//     }
//     #already-user {
//         text-align: center;
//         a {
//             color: ${primaryColor};
//         }
//     }

// `;

// export const InputContainer = styled.div`
//     width: 100%;
//     height: 60px;

//     margin-bottom: 20px;
//     padding: 0 .8rem;
//     background: #f6f6f7;
//     color: #8e8c94;
//     border-radius: 10px;
//     border: 2px solid transparent;
//     display: flex;
//     align-items: center;
//     :last-of-type {
//         height: 80px;
//     }
//     :focus-within {
//         border: 2px solid ${primaryColor};
//         padding: .6rem .8rem;
//     }
//     input, textarea {
//         border: none;
//         outline: none;
//         height: 100%;
//         width: 100%;
//         background: transparent;
//     }
//     textarea {
//         margin-top: .8rem;
//     }
//     svg {
//         margin: 0 10px;
//         font-size: 18px;
//     }
// `;

// export const Top = styled.div`
//     width: 100%;
//     height: 60px;

//     margin-bottom: 20px;
//     border: 2px solid transparent;
//     /* background: #f6f6f7;
//     color: #8e8c94; */

//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     input {
//         background: #f6f6f7;
//         color: #8e8c94;

//         border: none;
//         padding-left: 1rem;
//         border-radius: 10px;
//         outline: none;

//         height: 100%;
//         width: 50%;

//         :focus-within {
//             border: 2px solid ${primaryColor};
//         }
//         /* background: transparent; */
//         :first-of-type {
//             margin-right: 1rem;
//         }
//     }
// `;
// export const UploadContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     font-size: 14px;
//     `;
// export const Input = styled.input`
//   display: none;
// `;
// export const SubmitBtn = styled.button`
//     border: none;
//     width: 100%;
//     background: ${primaryColor};
//     color: white;
//     height: 50px;
//     font-size: 16px;
//     border-radius: 10px;
//     margin: 20px 0;
//     cursor: pointer;
// `;

// export const Dropzone = styled.div`
//   border: 2px dashed #ccc;
//   padding: 2rem;
//   margin: 1rem;
//   cursor: pointer;
// `;
// export const ErrorCont = styled.div`
//     padding: 5px;
//     background: #ff000077;
//     color: white;
//     border-radius: 99px;
//     width: 60%;
//     margin: 10px auto;
//     text-align: center;
//     font-size: 14px;
// `;
