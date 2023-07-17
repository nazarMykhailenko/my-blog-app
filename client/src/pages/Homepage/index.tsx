import React from 'react'
import { MainArticle } from './MainArticle'
import { WeatherBlock } from './WeatherBlock'

export const Homepage: React.FC = () => {
	return (
		<div className='page relative p-10'>
			<div className='flex items-center justify-between h-[25rem]'>
				<MainArticle />
				<WeatherBlock />
			</div>
			<div className='absolute w-full h-5/6 bottom-0 bg-[#F5F7F9] p-10 rounded-tl-[5rem] -z-10 -ml-10'></div>
		</div>
	)
}
