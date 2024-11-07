import React from "react";
import Button from "../../../../partials/Button";
import { ImgUrlAssets } from "../../../../helpers/functions-general";
import Divider from "../../../../partials/Divider";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { FaArrowDown } from "react-icons/fa";

const GraphicsDesign = () => {
	return (
		<>
			{/* no divider */}
			<section
				id='graphicsDesign'
				className='bg-accent text-primary overflow-x-auto w-full h-auto portrait:lg:h-screen'>
				<div className='flex h-full items-center text-primary lg:flex-row flex-col text-center justify-center'>
					<div className='left flex flex-col items-center gap-2 w-full lg:w-1/2 py-5 lg:py-0'>
						<div className='left-text flex w-full flex-col items-center gap-2 px-10 pt-20 lg:pt-0'>
							<h4 className='text-primary pb-5 md:pb-3 lg:pb-4 font-semibold uppercase font-semibold text-base w-full lg:px-5 text-center !tracking-name'>
								CAPTIVATING VISUALS, EXCEPTIONAL ARTISTRY.
							</h4>
							<h2 className='uppercase text-center pb-5 xl:pb-5 leading-none w-auto text-center text-primary ~text-3xl/5xl xl:text-7xl  w-full xl:px-14'>
								Graphics Design
							</h2>
							<p className='w-full xl:px-10 pb-5 md:pb-0  text-center text-primary px-2 ~text-base/xl xl:!leading-loose xl:mx-auto px-0 xl:py-5 lg:mx-0'>
								Talented student with a flair for Graphic and Video Editing -
								Let collaborate to elevate your visual content and bring your
								ideas to life with captivating creativity
							</p>
						</div>
						<div className='left-nav RFG '>
							<Button
								LinkType={"https://www.behance.net/gallery/203611609/Dynamo"}
								typeOf={"Dynamo"}
								btnType={"SHARE"}
								bgType={"primary"}
								textType={"accent"}
							/>

							<Button
								specialClass={true}
								LinkType={"https://domain.ext/path"}
								typeOf={"Divine Bloom"}
								btnType={"HEART"}
								bgType={"primary"}
								textType={"content"}
							/>

							<Button
								typeOf={"Coming Soon"}
								btnType={"SOON"}
								bgType={"content"}
								textType={"bg"}
							/>

							<Button
								typeOf={"Coming Soon"}
								btnType={"SOON"}
								bgType={"content"}
								textType={"bg"}
							/>
							{/* <HashLink
								to='#videoEditing'
								className={``}>
								<button className={`extendedBtn bg-accent `}>
									<p className=''>See More</p>
									<FaArrowDown />
								</button>
							</HashLink> */}
						</div>
					</div>
					<div className='right lg:w-1/2 img-block size-full lg:w-1/2 h-full'>
						<img
							className='lg:flex lg:size-full object-cover'
							src={`${ImgUrlAssets}/graphicsDes.jpg`}
							alt=''
						/>
					</div>
				</div>
			</section>
			<Divider />
		</>
	);
};

export default GraphicsDesign;
