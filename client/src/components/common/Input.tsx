import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

export const Input: React.FC = () => {
	const [inputValue, setInputValue] = React.useState('')
	const inputRef = React.useRef<HTMLInputElement>(null)

	const focusOnInput = () => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}

	const changeInputValue = () => {
		if (inputRef.current) {
			setInputValue(inputRef.current.value)
		}
	}

	return (
		<div className='overflow-hidden rounded-lg flex'>
			<input
				onChange={changeInputValue}
				value={inputValue}
				ref={inputRef}
				type='text'
				className='py-4 px-8 bg-[#F2F4F8] text-[#8394A1] font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
				placeholder='Search'
			/>
			<div
				onClick={focusOnInput}
				className='px-6 flex items-center justify-center bg-[#567DF3] text-white cursor-pointer rounded-lg'
			>
				<RiSearchLine />
			</div>
		</div>
	)
}
