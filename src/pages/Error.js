import { Link } from "react-router-dom";
import img from "../assests/not-found.svg";
import styled from "styled-components";

const Error = () => {
	return (
		<Wrapper>
			<div>
				<img src={img} alt="not found" />
				<h3>Ohh! Page Not Found</h3>
				<p>We can't seem to find the page you're looking for</p>
				<Link to="/">back home</Link>
			</div>
		</Wrapper>
	);
};
export default Error;

const Wrapper = styled.main`
	text-align: center;
	height: 100vh;

	img {
		width: 90vw;
		max-width: 600px;
		display: block;
		margin-bottom: 2rem;
	}
	display: flex;
	align-items: center;
	justify-content: center;
	h3 {
		margin-bottom: 0.5rem;
	}
	p {
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: gray;
	}
	a {
		color: black;
		text-decoration: underline;
		text-transform: capitalize;
	}
`;
