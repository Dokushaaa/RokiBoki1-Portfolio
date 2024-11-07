import React from "react";
import Divider from "../../../../partials/Divider";
import { HashLink } from "react-router-hash-link";
import { FaArrowDown } from "react-icons/fa";
import { ImgUrlAssets } from "../../../../helpers/functions-general";

const CreativeProcess = () => {
	return (
		<>
			<Divider />

			<section
				id='creativeProcess'
				className='bg-gray text-primary overflow-x-auto w-full h-auto portrait:lg:h-screen'>
				<div className='flex items-center gap-5 text-bg lg:flex-row flex-col text-center justify-center w-full h-auto h-full'>
					<div className='left container w-full flex flex-col items-center transition-all lg:w-1/2 ~px-2/5 pt-10 lg:pt-0'>
						<h4 className='text-primary pb-5 md:pb-3 lg:pb-4 font-semibold uppercase font-semibold text-base w-full text-center !tracking-name'>
							just start
						</h4>
						<h2 className='uppercase text-center pb-5 xl:pb-5 leading-none w-auto text-center text-primary ~text-3xl/5xl xl:text-7xl  w-full xl:px-14'>
							creative process
						</h2>
						<p className='w-full xl:px-10 pb-5 md:pb-0  text-center text-primary px-2 ~text-base/xl xl:!leading-loose xl:mx-auto px-0 lg:py-5 lg:mx-0 '>
							As a mid-level designer, my creative process delves deep,
							intertwining years of experience with fresh innovation. Each
							project becomes a canvas for originality and precision, where
							every detail is meticulously crafted to elevate brands and propel
							business success.
						</p>
						<div className='idHashLink'>
							<HashLink to='#resumeCV'>
								<FaArrowDown className='text-content' />
							</HashLink>
						</div>
					</div>
					<div className='right lg:w-1/2 img-block size-full lg:w-1/2 h-full'>
						<img
							className='lg:flex lg:size-full lg:object-fill object-cover'
							src={`${ImgUrlAssets}/NotYourSetupBuddy.jpg`}
							alt=''
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default CreativeProcess;
