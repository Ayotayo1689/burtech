import styled from "styled-components";

const Wrapper = styled.aside`
	@media (min-width: 992px) {
		display: none;
	}
	.sidebar-container {
		position: fixed;
		inset: 0;
		padding: 0.5rem;
		display: flex;

		z-index: -1;
		opacity: 0;
		transform: translateX(-100%);
		transition: var(--transition);
		background: transparent;
	}
	.show-sidebar {
		z-index: 99;
		opacity: 1;
		transform: translateX(0);

		background: rgba(0, 1, 0, 0.3);
	}
	.content {
		background: var(--white);
		width: 100%;
		height: 95vh;
		border-radius: var(--borderRadius);
		padding: 3rem 1rem;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 2rem;
	}
	.close-btn {
		position: absolute;
		top: 48px;
		right: 20px;
		background: transparent;
		border-color: transparent;
		font-size: 1.4rem;
		color: #4688e4;
		cursor: pointer;
		font-weight: 200;
	}
`;
export default Wrapper;
