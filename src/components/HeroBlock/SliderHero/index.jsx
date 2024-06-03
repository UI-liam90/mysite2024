import { useRef } from "react";
import { InView } from "react-intersection-observer";
import { v4 } from "uuid";
import { HTMLRender } from "~helpers/htmlRender";
import LinkButton from "~components/LinkButton";
import { WpImage } from "~helpers/WpImage";
import { Splide, SplideTrack, SplideSlide } from "react-splide";
import "react-splide/css";

const SliderHero = ({ blockData }) => {
	const splideElRef = useRef(null);

	let options = {
		type: "loop",
		perPage: 1,
		autoplay: blockData.autoplay === "yes" ? true : false,
		interval: blockData.speed ? blockData.speed : 3000,
		gap: blockData.gap ? blockData.gap : 0,
	};
	return (
		<div className={`slider-hero ${blockData.fullWidth === "yes" ? "hero-block--full-width" : ""}`}>
			<div className={`slide-container`}>
				<Splide ref={splideElRef} options={options} hasTrack={false}>
					<SplideTrack>
						{blockData.slides?.map((slide) => {
							return (
								<SplideSlide key={v4()}>
									<WpImage file={slide.slideImage.node} />
									{slide.overlay || slide.button ? (
										<InView threshold="0.25" triggerOnce="true">
											{({ inView, ref }) => (
												<div className={`hero-overlay toFadeIn ${inView ? "fadeIn" : ""}`} ref={ref}>
													{slide.overlay && <HTMLRender data={slide.overlay} />}
													{slide.button && (
														<LinkButton type="primary" url={slide.button.url} target={slide.button.target}>
															{slide.button.title}
														</LinkButton>
													)}
												</div>
											)}
										</InView>
									) : null}
								</SplideSlide>
							);
						})}
					</SplideTrack>
				</Splide>
			</div>
		</div>
	);
};
export default SliderHero;
