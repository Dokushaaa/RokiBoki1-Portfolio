import React from "react";
import Divider from "../../../../partials/Divider";
import { ImgUrlAssets } from "../../../../helpers/functions-general";
import { HashLink } from "react-router-hash-link";
import { FaArrowDown } from "react-icons/fa";

const Mockups = () => {
	return (
		<>
			<Divider />
			<section
				id='mockups'
				className='bg-accent text-primary overflow-x-auto w-full h-auto portrait:lg:h-screen'>
				<div className='flex flex-col lg:flex-row justify-between landscape:gap-5 items-center h-full w-full'>
					<div className='left w-full order-2 lg:order-1 lg:w-1/2  lg:px-0 order-2 lg:order-1 size-full img-block h-full w-full lg:w-1/2 bg-cover bg-no-repeat pt-20 lg:pt-0'>
						<img
							className='size-full lg:flex lg:object-fill object-cover'
							src={`${ImgUrlAssets}/DynamoMock.png`}
							alt=''
						/>
					</div>
					<div className=' right justify-center w-full lg:w-1/2 order-2 lg:order-1 ~px-4/10  mx-auto text-primary container items-center flex flex-col lg:gap-5'>
						<h4 className='text-primary pb-5 md:pb-3 lg:pb-4 font-semibold uppercase font-semibold text-base w-full text-center !tracking-name'>
							Showcase your products
						</h4>
						<h2 className='uppercase text-center pb-5 xl:pb-5 leading-none w-auto text-center text-primary ~text-3xl/5xl xl:text-7xl  w-full xl:px-14'>
							Mockups
						</h2>
						<p className='w-full xl:px-10 pb-5 md:pb-0  text-center text-primary px-2 ~text-base/xl xl:!leading-loose xl:mx-auto px-0 lg:py-5 lg:mx-0 '>
							Creating innovative product designs that resonate with consumers,
							driving engagement and boosting brand recognition for businesses.
						</p>
						<div className='idHashLink'>
							<HashLink to='#profileDescription'>
								<FaArrowDown className='text-accent' />
							</HashLink>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Mockups;
