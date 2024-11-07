import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { ImgUrlAssets } from "../../../../helpers/functions-general";
import Divider from "../../../../partials/Divider";

const ProfileDescription = () => {
	return (
		<>
			<Divider />
			<section
				id='profileDescription'
				className='bg-gray text-primary overflow-x-auto w-full h-auto portrait:lg:h-screen'>
				<div className='flex flex-col lg:flex-row justify-between items-center h-full w-full'>
					<div className='left w-full lg:w-1/2 lg:px-0  size-full img-block h-full w-full lg:w-1/2 bg-cover bg-no-repeat order-2 lg:order-1'>
						<img
							className='size-full lg:flex lg:object-fill object-cover'
							src={`${ImgUrlAssets}/profileDescript.jpg`}
							alt=''
						/>
					</div>
					<div className=' right justify-center w-full lg:w-1/2 px-2 lg:px-5 xl:px-10   mx-auto text-primary container items-center flex flex-col lg:gap-5 order-1 lg:order-2 pt-10 lg:pt-0'>
						<h4 className='text-primary pb-5 md:pb-3 lg:pb-4 font-semibold uppercase font-semibold text-base w-full text-center !tracking-name'>
							freelancer / student
						</h4>
						<h2 className='uppercase text-center pb-5 xl:pb-5 leading-none w-auto text-center text-primary ~text-3xl/5xl xl:text-7xl  w-full xl:px-14'>
							mid level creative
						</h2>
						<p className='w-full xl:px-10 pb-5 md:pb-0  text-center text-primary px-2 ~text-base/xl xl:!leading-loose xl:mx-auto px-0 lg:py-5 lg:mx-0 '>
							For the past four years, I've been sought out and commissioned by
							agencies and businesses to enhance their branding and elevate
							their visual presence. My diverse portfolio and specialized
							expertise have fortified my creative prowess, enabling me to
							consistently deliver exceptional results
						</p>
						<div className='idHashLink'>
							<HashLink to='#creativeProcess'>
								<FaArrowDown className='text-content' />
							</HashLink>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProfileDescription;
