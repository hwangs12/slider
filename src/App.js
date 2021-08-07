import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
	const [activeSlide, setActiveSlide] = useState(1);

	useEffect(() => {
		setInterval(() => {
			setActiveSlide((activeSlide) =>
				activeSlide === data.length ? 1 : activeSlide + 1
			);
		}, 2000);
	}, []);

	const checkLastSlide = (activeIndex, data) => {
		return activeIndex <= 1 ? data.length : activeIndex - 1;
	};

	return (
		<section className="section">
			<div className="title">
				<h2>
					<span>/</span>
					reviews
				</h2>
			</div>
			<div className="section-center">
				{data.map((review) => {
					const { id, image, name, quote, title } = review;
					return (
						<article
							key={id}
							className={
								id === activeSlide
									? "activeSlide"
									: id === checkLastSlide(activeSlide, data)
									? "lastSlide"
									: "nextSlide"
							}
						>
							<img src={image} alt="" className="person-img" />
							<h4>{title}</h4>
							<p className="title">{name}</p>
							<p className="text">{quote}</p>
							<FaQuoteRight className="icon" />
						</article>
					);
				})}
				<button
					className="prev"
					onClick={() =>
						setActiveSlide((activeSlide) =>
							checkLastSlide(activeSlide, data)
						)
					}
				>
					<FiChevronLeft />
				</button>
				<button
					className="next"
					onClick={() =>
						setActiveSlide((activeSlide) =>
							activeSlide === data.length ? 1 : activeSlide + 1
						)
					}
				>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}

export default App;
