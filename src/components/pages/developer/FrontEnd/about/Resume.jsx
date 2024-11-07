import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { ImgUrlAssets } from "../../../../helpers/functions-general";
import Divider from "../../../../partials/Divider";

const Resume = () => {
	return (
		<>
			<Divider />
			<section
				id='resumeCV'
				className='bg-gray text-primary overflow-x-auto w-full h-auto portrait:lg:h-screen'>
				<div className='flex flex-col lg:flex-row justify-between lg:gap-5 items-center h-full w-full'>
					<div className='left w-full lg:w-1/2 size-full img-zoom h-full w-full  scale-90 lg:scale-75 order-2 lg:order-1 '>
						<img
							className='size-full'
							src={`${ImgUrlAssets}/resumeCV.jpg`}
							alt=''
						/>
					</div>
					<div className='right order-1 lg:order-2 justify-center w-full lg:w-1/2 ~px-4/10  mx-auto text-primary container items-center flex flex-col lg:gap-5 pt-10 lg:pt-0'>
						<h4 className='text-primary pb-5 md:pb-3 lg:pb-4 font-semibold uppercase font-semibold text-base w-full text-center !tracking-name'>
							cv
						</h4>
						<h2 className='uppercase text-center pb-5 xl:pb-5 leading-none w-auto text-center text-primary ~text-3xl/5xl xl:text-7xl  w-full xl:px-14'>
							resume
						</h2>
						<p className='w-full xl:px-10 pb-5 md:pb-0  text-center text-primary px-2 ~text-base/xl xl:!leading-loose xl:mx-auto px-0 lg:py-5 lg:mx-0 '>
							As an incoming college student, I'm eager to channel my passion
							for design into academic exploration and real-world application.
							With a keen eye for creativity and a hunger for learning, I'm
							poised to embark on a journey of growth and innovation in the
							design field.
						</p>
						<div className='px-2'>
							<HashLink
								to='#CTA'
								className={``}>
								<button className={`extendedBtn bg-primary `}>
									<p className='text-content'>Contact Me!</p>
									<FaArrowDown className='text-content' />
								</button>
							</HashLink>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Resume;
