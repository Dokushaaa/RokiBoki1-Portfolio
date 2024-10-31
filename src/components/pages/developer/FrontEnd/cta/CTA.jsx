import React from "react";
import EmailForm from "./EmailForm";

const CTA = () => {
	return (
		<>
			<div className=' w-full h-auto max-h-[1000px] bg-bg py-10 sm:py-20 md:py-32 lg:py-40  flex items-center gap-5 justify-center'>
				<div className='container py-0'>
					<div className='dividerLine mb-10' />
					<h2 className='uppercase text-center pb-2 md:pb-5 leading-none w-auto md:w-full  text-center text-content  text-xl   md:text-6xl xl:text-7xl w-1/2 md:px-20 font-regularHeader'>
						CTA
					</h2>
					<div className='dividerLine mt-10' />
				</div>
			</div>
			<EmailForm />
		</>
	);
};

export default CTA;
