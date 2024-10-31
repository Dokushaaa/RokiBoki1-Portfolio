import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const EmailForm = () => {
	return (
		<>
			<div
				className='section'
				id='CTA'>
				<div className='h-sreen w-full overflow-x-auto transition-all bg-primary'>
					<div className='flex flex-col items-center jusify-between mx-auto h-full w-full md:w-2/3 py-8 pt-24 px-4 md:px-0'>
						<h4 className='text-accent pb-5 md:pb-3 lg:pb-4 font-semibold uppercase font-semibold text-base w-full text-center !tracking-name'>
							Interested?
						</h4>
						<h2 className='uppercase text-center pb-5 xl:pb-5 leading-none w-auto text-center text-content ~text-3xl/5xl xl:text-7xl  w-full xl:px-14'>
							Contact Me
						</h2>
						<p className='w-full xl:px-10 pb-5 md:pb-0  text-center text-content px-2 ~text-base/xl xl:!leading-loose xl:mx-auto px-0 lg:py-5 lg:mx-0 '>
							Interested in collaborating or have a project in mind? Feel free
							to reach out. I'm always eager to explore new opportunities and
							discuss how I can contribute to your vision now
						</p>
						<div className='modal-body w-full lg:w-2/3 p-2 md:p-4 pt-0'>
							<form className='flex flex-col h-full py-2'>
								<div className='grow overflow-y-auto '>
									<div className='input-wrapper'>
										<input
											type='text'
											id='name'
											class='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-5 h-20 dark:placeholder-gray-400 dark:text-white bg-content'
											placeholder='Name'
											required
										/>
									</div>
									<div className='input-wrapper'>
										<input
											type='email'
											id='email'
											class='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-5 h-20 dark:placeholder-gray-400 dark:text-white bg-content'
											placeholder='Email'
											required
										/>
									</div>
									<div className='input-wrapper'>
										<textarea
											id='message'
											class='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-5 h-20 dark:placeholder-gray-400 dark:text-white bg-content h-[10rem]'
											placeholder='Message'
											required
										/>
									</div>
								</div>
								<div className='form-action'>
									<div className='md:px-2 flex items-center flex-col '>
										<HashLink
											to='#hero'
											className={``}>
											<button className={`extendedBtn bg-accent `}>
												<p className=''>Submit</p>
												<FaArrowRight />
											</button>
										</HashLink>
									</div>
								</div>
								<small className='pt-4 text-center md:text-end md:pr-8'>
									&copy;Roki - All Rights Reserved
								</small>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EmailForm;
