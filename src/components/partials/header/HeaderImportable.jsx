import React from "react";
import { FaHome, FaStar } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
const HeaderImportable = ({ menu }) => {
	const navList = [
		{
			menu: "home",
			url: "/home",
			icon: <FaHome />,
			name: "Home",
		},
		{
			menu: "information",
			url: "/information",
			icon: <ImProfile />,
			name: "About",
		},
		{
			menu: "projects",
			url: "/projects",
			icon: <GrProjects />,
			name: "Projects",
		},
		{
			menu: "featured",
			url: "/featured",
			icon: <FaStar />,
			name: "Featured",
		},
		{
			menu: "contacts",
			url: "/contacts",
			icon: <MdCall />,
			name: "Contacts",
		},
	];
	return (
		<>
			<ul className='flex items-center lg:flex-row flex-col xl:gap-2'>
				{navList.map((item, i) => (
					<li
						className={`nav-link px-5 pb-2 ${
							menu === item.menu ? "active" : ""
						}`}
						key={i}>
						<Link to={`${item.url}`}>
							{item.icon} {item.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default HeaderImportable;
