import styled from "styled-components";

const Wrapper = styled.nav`
	z-index: 5;
	height: var(--nav-height);
	// display: flex;
	align-items: center;
	padding: 0 2rem;
	padding-top: 0.9rem;
	// justify-content: center;
	box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
	background: var(--white);
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
	.logo {
		display: flex;
		align-items: center;
		width: 100px;
	}
	.nav-center {
		display: flex;
		width: 90vw;
		align-items: center;
		justify-content: space-between;
	}
	.toggle-btn {
		background: transparent;
		border-color: transparent;
		font-size: 1.75rem;
		color: red;
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	.btn-container {
		position: relative;
		display: flex;
		justify-content: space-around;
		gap: 2rem;

		.tag {
			display: flex;
			color: var(--primary-100);
			border-radius: 2rem;
			align-items: center;
			background-color: #e7eff6;
			padding-inline: 1rem;
			gap: 0.5rem;
		}
		@media (max-width: 40rem) {
			width: 14rem;
			gap: 0.4rem;
			margin-right: -1rem;
			justify-content: center;
			.tag {
				font-size: 0.8rem;
			}
		}
	}
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0 0.5rem;
		position: relative;
	}

	.dropdown {
		position: absolute;
		top: 40px;
		left: 0;
		width: 100%;
		background: var(--primary-100);
		box-shadow: var(--shadow-2);
		padding: 0.5rem;
		text-align: center;
		visibility: hidden;
		border-radius: var(--borderRadius);
	}
	.show-dropdown {
		visibility: visible;
	}
	.dropdown-btn {
		background: transparent;
		border-color: transparent;
		color: var(--primary-100);
		letter-spacing: var(--letterSpacing);
		text-transform: capitalize;
		cursor: pointer;
	}
	.logo-text {
		display: none;
		margin: 0;
	}
	@media (min-width: 992px) {
		position: fixed;
		left: 250px;
		width: calc(100vw - 250px);
		top: 0;
		.toggle-btn {
			display: none;
		}

		.nav-center {
			width: 90%;
		}

		.logo-text {
			display: block;
		}
	}
	.pageName {
		text-transform: capitalize;
	}

	.desktop-nav {
		justify-content: space-between;
		display: none;
		@media (min-width: 992px) {
			display: flex;
		}
	}

	.left {
		display: flex;
		align-items: center;
		gap: 24px;

		.search {
			display: flex;
			align-items: center;
			gap: 10px;

			img {
				width: 15px;
				height: 15px;
			}

			input {
				background: transparent;

				&:focus {
					outline: none;
					padding: 10px;
				}
			}
		}
	}

	.right {
		display: flex;
		align-items: center;
		gap: 20px;

		.user {
			display: flex;
			align-items: center;
			gap: 10px;
			padding-block: 1rem;

			.user-image {
				width: 37px;
				height: 37px;
			}

			.dropdown-icon {
				width: 10px;
				height: 5px;
			}
		}
	}
`;
export default Wrapper;
