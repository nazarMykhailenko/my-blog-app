import React from 'react'
import { useLocation } from 'react-router-dom'
import { RiSunLine, RiMoonLine } from 'react-icons/ri'
import { Input } from './common/Input'

export const Header: React.FC = () => {
	const { pathname } = useLocation()
	const currentTime = new Date().getHours()
	const isMorning = currentTime >= 5 && currentTime <= 12
	const isNight = currentTime >= 22 || currentTime <= 5

	return (
		<div className='header flex justify-between items-center p-10'>
			<div className='text-4xl flex items-center space-x-8'>
				<div>
					<span className='text-5xl'>
						{isNight ? <RiMoonLine /> : <RiSunLine />}
					</span>
				</div>
				<div>
					<span className='font-bold'>{`${
						isMorning ? 'Good morning' : isNight ? 'Good night' : 'Hello'
					}, `}</span>
					<span>{`${'Rose'}`}</span>
				</div>
			</div>
			{pathname === '/' && (
				<div>
					<Input />
				</div>
			)}
		</div>
	)
}
