import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCloud, AiOutlineArrowRight } from 'react-icons/ai'
import { HiOutlineNewspaper } from 'react-icons/hi'

export const WeatherBlock: React.FC = () => {
	return (
		<div className='inline-flex flex-col justify-center bg-white shadow p-8 rounded-lg h-full space-y-7'>
			<div className='flex items-center space-x-10 bg-[#F5F7F9] p-5 rounded-lg'>
				<div>
					<HiOutlineNewspaper className='text-6xl' />
				</div>
				<div className='text-[1.4rem] flex flex-col space-y-1'>
					<div className='font-bold'>Tuesday Capsule</div>
					<div className='text-[#8394A1]'>Get updated on the fly</div>
					<Link
						to='brief'
						className='text-[#5077f9] flex items-center space-x-2'
					>
						<span>Brief me</span>
						<AiOutlineArrowRight />
					</Link>
				</div>
			</div>
			<div className='flex flex-col space-y-3'>
				<div className='font-bold'>Amsterdam, Netherlands</div>
				<div className='flex items-center space-x-10'>
					<div>
						<AiOutlineCloud className='text-6xl' />
					</div>
					<div className='text-[1.4rem] text-[#8394A1]'>
						<div>
							<span className='text-4xl text-[#3a3b40]'>28</span> °C
						</div>
						<div>Cloud day, chances of rain</div>
					</div>
				</div>
			</div>
		</div>
	)
}
