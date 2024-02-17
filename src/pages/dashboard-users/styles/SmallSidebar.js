import styled from "styled-components";

const Wrapper = styled.aside`
	@media (min-width: 992px) {
		display: none;
	}
	.sidebar-container {
		position: fixed;
		inset: 0;

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
		width: 50%;
		height: 100vh;
		border-radius: var(--borderRadius);
		padding: 0.2rem 2rem;
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 2rem;
	}
	.close-btn {
		position: absolute;
		top: 10px;
		right: 10px;
		background: transparent;
		border-color: transparent;
		font-size: 1.4rem;
		color: var(--red-dark);
		cursor: pointer;
	}
	.nav-links {
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
	}
	.nav-link {
		display: flex;
		align-items: center;
		color: var(--grey-500);
		padding: 1rem 0;
		text-transform: capitalize;
		transition: var(--transition);
	}
	.nav-link:hover {
		color: var(--grey-900);
	}
	.nav-link:hover .icon {
		color: var(--primary-100500);
	}
	.icon {
		font-size: 1.5rem;
		margin-right: 1rem;
		display: grid;
		place-items: center;
		transition: var(--transition);
	}
	.active {
		color: var(--grey-900);
	}
	.active .icon {
		color: var(--primary-100500);
	}
	.logout-btn {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-self: start;
		align-items: flex-start;

		.logout {
			display: flex;
			align-items: center;
			gap: 1rem;
		}
		.userImage {
			width: 50px;
			display: flex;
			gap: 1rem;
			img {
				object-fit: contain;
				width: 100%;
				border-radius: 100%;
				margin-left: -0.5rem;
			}
		}
	}
`;
export default Wrapper;
