import React from "react";
import Divider from "../../../../partials/Divider";
import VideoEditing from "./VideoEditing";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { ImgUrlAssets } from "../../../../helpers/functions-general";
import { HashLink } from "react-router-hash-link";

const Branding = () => {
	return (
		<>
			<Divider />

			<section
				id='branding'
				className='bg-accent text-primary overflow-x-auto w-full h-auto portrait:lg:h-screen'>
				<div className='flex items-center bg-accent landscape:gap-5 text-bg lg:flex-row flex-col text-center justify-center w-full h-auto h-full'>
					<div className='left order-2 lg:order1 container w-full flex flex-col items-center transition-all  lg:w-1/2 pt-20 lg:pt-0 ~px-2/5'>
						<h4 className='text-primary pb-5 md:pb-3 lg:pb-4 font-semibold uppercase font-semibold text-base w-full text-center !tracking-name'>
							SEAMLESS EDITS, STUNNING VISUALS.
						</h4>
						<h2 className='uppercase text-center pb-5 xl:pb-5 leading-none w-auto text-center text-primary ~text-3xl/5xl xl:text-7xl  w-full xl:px-14'>
							Branding
						</h2>
						<p className='w-full xl:px-10 pb-5 md:pb-0  text-center text-primary px-2 ~text-base/xl xl:!leading-loose xl:mx-auto px-0 lg:py-5 lg:mx-0 '>
							"Designing impactful branding visuals that captivate audiences and
							elevate businesses, leaving a lasting mark on their success
							journey"
						</p>
						<div className='idHashLink'>
							<HashLink to='#mockups'>
								<FaArrowDown className='text-accent' />
							</HashLink>
						</div>
					</div>
					<div className='right order-1 lg:order-2 lg:w-1/2 img-block size-full lg:w-1/2 h-full'>
						<img
							className='lg:flex lg:size-full lg:object-fill object-cover'
							src={`${ImgUrlAssets}/brandingAlpha.jpeg`}
							alt=''
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Branding;
