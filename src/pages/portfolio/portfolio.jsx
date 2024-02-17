import React from "react";
import featuredProduct1 from "../../assests/featured-product1.png";
import featuredProduct2 from "../../assests/featured-product2.png";
import featuredProduct3 from "../../assests/featured-product3.png";
import arrowUpRight from "../../assests/ArrowUpRight.png";
import HeroRightIcon from "../../assests/training-icon.png";
import lookHere from '../../assests/Look Here.png'
import Newsletter from "../../components/Newsletter";

import OurWorks from "../../components/ourWorks/ourWorks";

import {
	PortfolioContainer,
	HeroWrapper,
	HeroLeft,
	HeroRight,
	HeroRightImage,
	ProductCard,
	CardText,
	ReviewHeading,
	FeaturedProductsWrapper,
	FeaturedProductsCards,
	ProductCardImage,
	FeaturedProductLink,
	OurWorksHeading,
} from "./style";
import Reviews from "../AboutUs/Review";

const Portfolio = () => {
	return (
		<PortfolioContainer>
			{/*---------Hero----------*/}
			<HeroWrapper>
				<HeroLeft>
					<img src={lookHere} alt="image"/>
					<h4>Training Events</h4>
					<a href="#">
						<span>More details</span>
					</a>
				</HeroLeft>
				<HeroRight>
					<HeroRightImage>
						<img src={HeroRightIcon} alt="image"/>
					</HeroRightImage>
				</HeroRight>
			</HeroWrapper>

			{/*---------Our Works---------*/}
			<OurWorksHeading>
				<h2>Our Works</h2>
				<p>Our record of successful projects</p>
			</OurWorksHeading>
			<OurWorks />

			{/*-------Client Review Section--------*/}
			{/* <ClientReview /> */}
			<Reviews />

			{/*---------Featured products----------*/}
			<FeaturedProductsWrapper>
				<ReviewHeading>
					<h3>Weekly Featured Products</h3>
					<p>Browse the collection of top products</p>
				</ReviewHeading>

				<FeaturedProductsCards>
					<ProductCard>
						<ProductCardImage>
							<img src={featuredProduct1} alt="image"/>
						</ProductCardImage>
						<CardText>
							<h3>Digital Microtome</h3>
							<p>
								Safety protection against water lacking and Automatically
								exhausts cool air
							</p>
							<FeaturedProductLink href="#">
								<div>
									Learn more <img src={arrowUpRight} alt="image"/>
								</div>
							</FeaturedProductLink>
						</CardText>
					</ProductCard>
					<ProductCard>
						<ProductCardImage>
							<img src={featuredProduct2} alt="image"/>
						</ProductCardImage>
						<CardText>
							<h3>Digital Microtome</h3>
							<p>
								Safety protection against water lacking and Automatically
								exhausts cool air
							</p>
							<FeaturedProductLink href="#">
								<div>
									Learn more <img src={arrowUpRight} alt="icon"/>
								</div>
							</FeaturedProductLink>
						</CardText>
					</ProductCard>
					<ProductCard>
						<ProductCardImage>
							<img src={featuredProduct3} />
						</ProductCardImage>
						<CardText>
							<h3>Digital Microtome</h3>
							<p>
								{" "}
								Safety protection against water lacking and Automatically
								exhausts cool air
							</p>
							<FeaturedProductLink href="#">
								<div>
									Learn more <img src={arrowUpRight} alt="icon"/>
								</div>
							</FeaturedProductLink>
						</CardText>
					</ProductCard>
				</FeaturedProductsCards>
			</FeaturedProductsWrapper>
			<Newsletter />
		</PortfolioContainer>
	);
};

export default Portfolio;
