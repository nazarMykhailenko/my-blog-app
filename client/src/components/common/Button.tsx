import React from 'react'

interface IButtonProps {
	children: string
}

export const Button: React.FC<IButtonProps> = (props) => {
	const { children } = props
	return (
		<button className='bg-[#375EDA] color-white px-6 py-2 rounded-lg'>
			{children}
		</button>
	)
}
