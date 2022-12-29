import React, { useState } from 'react';
import { type NavLink, type NavbarProps } from '../types';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Style from './Navbar.module.scss';

const links: NavLink[] = [
	{
		name: "home",
		to: '/',
		active: 'home',
	},
	{
		name: 'about',
		to: '#',
		active: 'about',
	},
	{
		name: 'Gallery',
		to: '#',
		active: 'gallery',
	},
];

export default function Navbar({ darkmode, handleClick }: NavbarProps) {
	const location = useLocation();
	const initailState =
		location.pathname === '/'
			? 'home'
			: location.pathname.slice(1, location.pathname.length);
	const [active, setActive] = useState(initailState);

	return (
		<Box component={'nav'} width={'90vw'} sx={{ zIndex: 10, pt: 8 }}>
			<Box
				component={'ul'}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				gap={{ xs: '2rem', md: '8rem' }}
				textTransform={'uppercase'}
				fontSize={'1rem'}
			>
				{links.map((link, index) => (
					<Box
						key={index}
						component="li"
						className={
							link.active === active && !link.type ? Style.active : undefined
						}
						sx={{ borderImageSource: "#000000" }}
					>
						<Link
							to={link.to}
							onClick={() => setActive(link.active)}
							style={{ textDecoration: 'none', fontWeight: 600 }}
						>
							{!link.type && (
								<p style={{ paddingBottom: '0rem' }}>{link.name}</p>
							)}
							{link.type && <h1>{link.name}</h1>}
						</Link>
					</Box>
				))}
			</Box>
		</Box>
	);
}
