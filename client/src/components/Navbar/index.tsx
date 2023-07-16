import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../common/Button'
import {
	RiHome3Fill,
	RiUserFill,
	RiBuildingFill,
	RiMovieFill,
	RiFootballFill,
} from 'react-icons/ri'
import { convertMonth } from '../../utils/convertMonth'
import img from '../../assets/img/girl-avatar.avif'
import './styles.scss'

export const Navbar: React.FC = () => {
	const [currentDate, setCurrentDate] = React.useState('')
	const [currentTime, setCurrentTime] = React.useState('')

	React.useEffect(() => {
		const updateDateTime = () => {
			const now = new Date()
			const formattedDate = now.toLocaleDateString().split('/')
			const formattedTime = now.toLocaleTimeString().split(' ')

			let date = `${convertMonth(+formattedDate[0])} ${
				formattedDate[1].length !== 1
					? formattedDate[1]
					: '0' + formattedDate[1]
			}, ${formattedDate[2]}`

			const hours = formattedTime[0].split(':')

			let time = `${hours[0].length !== 1 ? hours[0] : '0' + hours[0]}:${
				hours[1].length !== 1 ? hours[1] : '0' + hours[1]
			} ${formattedTime[1].toLocaleLowerCase()}`

			setCurrentDate(date)
			setCurrentTime(time)
		}

		const interval = setInterval(updateDateTime, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const navLinkDefaultStyles =
		'font-bold flex items-center space-x-8 hover:text-[#2C2D32]'

	return (
		<div className='navbar text-[#8394A1] flex flex-col'>
			<div className='mb-20'>
				<img
					src={img}
					alt='pfp'
					className='h-24 w-24 rounded-full object-cover mb-6'
				/>
				<div className='font-bold text-black mb-1'>
					{!currentDate ? '??? ??, ????' : currentDate}
				</div>
				<div className='text-[1.4rem]'>
					{!currentTime ? '??:?? ??' : currentTime}
				</div>
			</div>
			<div className='mb-24 flex-1'>
				<ul className='flex flex-col space-y-12'>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? 'link-active link' : 'link'
							}
						>
							<div className='link-info'>
								<div>
									<RiHome3Fill className='icon' />
								</div>
								<span>Home</span>
							</div>
							<div className='link-circle'>
								<span></span>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/my-profile'
							className={({ isActive }) =>
								isActive ? 'link-active link' : 'link'
							}
						>
							<div className='link-info'>
								<div>
									<RiUserFill className='icon' />
								</div>
								<span>My Profile</span>
							</div>
							<div className='link-circle'>
								<span></span>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/business'
							className={({ isActive }) =>
								isActive ? 'link-active link' : 'link'
							}
						>
							<div className='link-info'>
								<div>
									<RiUserFill className='icon' />
								</div>
								<span>Business</span>
							</div>
							<div className='link-circle'>
								<span></span>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/entertainment'
							className={({ isActive }) =>
								isActive ? 'link-active link' : 'link'
							}
						>
							<div className='link-info'>
								<div>
									<RiUserFill className='icon' />
								</div>
								<span>Entertainment</span>
							</div>
							<div className='link-circle'>
								<span></span>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/sport'
							className={({ isActive }) =>
								isActive ? 'link-active link' : 'link'
							}
						>
							<div className='link-info'>
								<div>
									<RiUserFill className='icon' />
								</div>
								<span>Sport</span>
							</div>
							<div className='link-circle'>
								<span></span>
							</div>
						</NavLink>
					</li>
				</ul>
			</div>
			<div className='text-white bg-[#5077F9] py-5 px-8 rounded-2xl self-start'>
				<div className='mb-1'>News in a box</div>
				<div className='font-light text-[1.3rem] mb-4'>Box is all you need</div>
				<Button>Upgrade</Button>
			</div>
		</div>
	)
}
