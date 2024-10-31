import React, { useEffect, useState } from "react";
import { ImgUrl } from "../../helpers/functions-general";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// deletables

import HeaderImportable from "./HeaderImportable";
import LightMode from "../functions/LightMode";

const HeaderMain = ({ menu }) => {
	const [showInfo, setShowInfo] = React.useState(false);
	const handleShowInfo = () => {
		setShowInfo(!showInfo);
	};
	const [showMode, setModeInfo] = React.useState(false);
	const handleModeInfo = () => {
		setModeInfo(!showMode);
	};
	return (
		<>
			{/* sticky top-0  z-[999] */}

			<header className='container pt-7 p b-5  pb-5 lg:pb-0 relative z-50'>
				<div className='header__wrapper flex flex-row justify-between items-center w-full'>
					<div className='header__img flex justify-start items-center gap-5 lg:w-1/4 z-99 w-1/2'>
						<img
							className='size-20 hidden lg:flex'
							src={`${ImgUrl}/MiniLogo.svg`}
							alt={`Eternity Reignited`}
						/>
						<p>Saavedra's Portfolio</p>
					</div>
					<div className='header__list lg:flex justify-center hidden w-1/2 lg:pl-5 xl:pl-0'>
						<HeaderImportable menu={menu} />
					</div>
					<div className='header__utils flex justify-end items-center gap-5 lg:w-1/4 z-99 w-1/2'>
						<button className='btn bg-accent font-semibold px-4'>
							<Link to='#'>Let&apos;s Talk</Link>
						</button>
						<LightMode />
						<button
							onClick={handleShowInfo}
							className='text-2xl md:hidden duration-500 transition-all'>
							{showInfo ? <FaTimes /> : <RxHamburgerMenu />}
						</button>
					</div>
				</div>
				{/* showInfo */}
				<div
					className={`nav-show-wrapper xl:hidden transition-all duration-500 ${
						showInfo === true
							? "w-full h-screen fixed left-0 top-[5.5rem] z-40 bg-primary flex flex-col items-center gap-5 lg:hidden"
							: "hidden"
					}`}>
					<div className='img'>
						<img
							className='size-[10rem]'
							src={`${ImgUrl}/MaxLogo.svg`}
							alt=''
						/>
					</div>
					<div className='nav-tree'>
						<HeaderImportable menu={menu} />
					</div>
					<div className='header__modalInfo text-center '>
						<p>Saavedra-Portfolio</p>
						<p>&copy; SaavedraArris/Dokusha</p>
					</div>
				</div>
			</header>
		</>
	);
};

export default HeaderMain;
