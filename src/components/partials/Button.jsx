import React from "react";
import { FaExternalLinkAlt, FaHeart, FaLock } from "react-icons/fa";
import { GoArrowDown, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
// save code: bg-${bgType === "" ? "btn-white" : bgType}
const Button = ({
	typeOf,
	btnType,
	LinkType,

	// delete recieved data if bg is bugging
}) => {
	return (
		<>
			<button className={`RFGB`}>
				<Link
					to={LinkType}
					target='_blank'>
					<ul
						className={`flex items-center gap-12 lg:gap-0 justify-between lg:justify-evenly xl:justify-around w-60 lg:w-auto xl:w-full`}>
						<li>
							{" "}
							<p
								className={`w-full pt-2 leading-[0px]  text-xs md:text-base lg:text-xs xl:text-base w-full `}>
								{typeOf}
							</p>
						</li>
						<li>
							{btnType === "SHARE" && "share" && (
								<>
									<FaExternalLinkAlt className='text-xl lg:text-2xl font-semibold ' />
								</>
							)}
							{btnType === "HEART" && "heart " && (
								<>
									<FaHeart className='text-xl lg:text-2xl font-semibold ' />
								</>
							)}
							{btnType === "SOON" && "soon" && (
								<>
									<FaLock className='text-xl lg:text-2xl font-semibold ' />
								</>
							)}
						</li>
					</ul>
				</Link>
			</button>
		</>
	);
};

export default Button;
