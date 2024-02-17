import styled from "styled-components";

const Wrapper = styled.section`
    background-color: #FFFBFE;
	
	.dashboard {
		display: grid;
		grid-template-columns: 1fr;
		background-color: #fff;
	}
	.dashboard-page {
		width: 100vw;
		margin: 0 auto;
		padding: 2rem 0;
	}
	@media (min-width: 992px) {
		.dashboard {
			grid-template-columns: auto 1fr;
		}
		.dashboard-page {
			width: 90%;
		}
	}
`;
export default Wrapper;