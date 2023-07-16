import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { Homepage } from './pages/Homepage'
import './App.scss'

export const App: React.FC = () => {
	return (
		<div className='wrapper p-10'>
			<Navbar />
			<Header />
			<Routes>
				<Route path='/' element={<Homepage />} />
			</Routes>
		</div>
	)
}
