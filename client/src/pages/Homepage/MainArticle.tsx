import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/img/buildings.avif'
import img2 from '../../assets/img/man-avatar.avif'

export const MainArticle: React.FC = () => {
	return (
		<div className='inline-flex items-center justify-center space-x-10 bg-white shadow p-4 rounded-lg h-full'>
			<Link to='/architecture/english-architecture'>
				<img className='w-[35rem] rounded-lg' src={img} alt='building' />
			</Link>
			<div className='flex flex-col space-y-5 font-bold'>
				<div className='text-[#8394A1] text-[1.4rem]'>Architecture</div>
				<div className='max-w-[25rem] text-[1.8rem]'>
					Ground breaking building is a classic example of English architecture
				</div>
				<div className='flex items-center space-x-5'>
					<Link to='/author/tony-roseville'>
						<img
							className='w-20 h-20 object-cover rounded-full'
							src={img2}
							alt='pfp'
						/>
					</Link>
					<div>
						<div className='text-[1.4rem]'>Tony Roseville</div>
						<div className='text-[1.3rem] text-[#8394A1]'>Jul 13, 2019</div>
					</div>
				</div>
			</div>
		</div>
	)
}
