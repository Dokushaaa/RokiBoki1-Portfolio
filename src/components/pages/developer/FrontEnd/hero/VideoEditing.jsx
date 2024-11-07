import React from "react";
import { ImgUrlAssets } from "../../../../helpers/functions-general";

import { FaArrowDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
const VideoEditing = () => {
	return (
		<>
			<section
				id='videoEditing'
				className='bg-gray text-primary overflow-x-auto w-full h-auto portrait:lg:h-screen'>
				<div className='w-full flex flex-col lg:flex-row items-center text-bg landscape:lg:~py-0/24 portrait:lg:my-[17.5rem]'>
					<div className='left ~px-2/5 justify-start md:order-2 order-1 flex flex-col items-center lg:items-left w-full md:pb-10 lg:pb-0 h-full'>
						<h4 className='text-primary pb-5 md:pb-3 lg:pb-4 font-semibold uppercase font-semibold text-base w-full text-center !tracking-name pt-20 lg:pt-0'>
							SEAMLESS EDITS, STUNNING VISUALS.
						</h4>
						<h2 className='uppercase text-center pb-5 xl:pb-5 leading-none w-auto text-center text-primary ~text-3xl/5xl xl:text-7xl  w-full xl:px-14'>
							Video Editing
						</h2>
						<p className='w-full xl:px-10 pb-5 md:pb-0  text-center text-primary px-2 ~text-base/xl xl:!leading-loose xl:mx-auto px-0 lg:py-5 lg:mx-0 '>
							Experienced professional crafting polished video edits, delivering
							captivating visuals and engaging storytelling for clients.
						</p>
						<div className='idHashLink'>
							<HashLink to='#branding'>
								<FaArrowDown className='text-content' />
							</HashLink>
						</div>
					</div>
					<div className='right md:order-1 order-2 w-full flex items-center justify-end h-full portrait:lg:px-2'>
						<video
							// controls
							// autoPlay
							className='md:size-[50rem] portrait:lg:size-full w-full size-full'>
							<source
								src={`${ImgUrlAssets}/videoEditing.mp4`}
								type='video/mp4'
							/>
						</video>
					</div>
				</div>
			</section>
		</>
	);
};

export default VideoEditing;
