import React from "react";
import { GoArrowDown } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "../../../../partials/Button";
import { HashLink } from "react-router-hash-link";
import { FaArrowDown } from "react-icons/fa";
import GraphicsDesign from "./GraphicsDesign";
import VideoEditing from "./VideoEditing";
import Divider from "../../../../partials/Divider";
import Branding from "./Branding";
import Mockups from "./Mockups";

const Hero = () => {
	return (
		<>
			<section
				id='hero'
				className='bg-bg text-content overflow-x-auto h-[1440px] max-h-screen w-full'>
				<div className='container'>
					<div className='flex items-center gap-2 flex-col justify-center pt-40 ~px-5/0'>
						<div className='flex items-center text-center flex-col'>
							<h4 className='text-accent pb-2  ~pb-8/14 font-semibold uppercase tracking-name ~text-sm.xl w-full text-center'>
								Charles Da
							</h4>
							<h1 className='uppercase text-center ~pb-2/5 leading-none w-auto md:w-full text-center text-content ~text-3xl/8xl w-1/2 ~px-0/20'>
								Creative Portfolio
							</h1>
							<p className='w-full ~px-0/14 lg:w-2/3 text-center text-content ~pb-3/10 ~px-0/5 ~text-base/2xl leading-loose'>
								Talented student with a flair for Graphic and Video Editing -
								Let collaborate to elevate your visual content and bring your
								ideas to life with captivating creativity
							</p>
						</div>
						<div className='px-2'>
							<HashLink
								to='#graphicsDesign'
								className={``}>
								<button className={`extendedBtn bg-accent `}>
									<p className=''>See More</p>
									<FaArrowDown />
								</button>
							</HashLink>
						</div>
					</div>
				</div>
			</section>
			<Divider />
			<GraphicsDesign />
			<VideoEditing />
			<Branding />
			<Mockups />
		</>
	);
};

export default Hero;
