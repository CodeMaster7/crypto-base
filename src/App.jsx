import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { ThemeProvider } from './context/ThemeContext'
import { AuthContextProvider } from './context/AuthContext'
// import Navbar from './components/Navbar'
import Home from './routes/Home'
// import Footer from './components/Footer'
import Signin from './routes/Signin'
import Signup from './routes/Signup'
import Account from './routes/Account'
import CoinPage from './routes/CoinPage'
import HomePage from './routes/HomePage'

function App() {
	const [coins, setCoins] = useState([])

	const url =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

	useEffect(() => {
		axios.get(url).then((response) => {
			setCoins(response.data)
			// console.log('data', response.data)
		})
	}, [url])

	return (
		<ThemeProvider>
			<AuthContextProvider>
				{/* <Navbar /> */}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/homepage' element={<HomePage coins={coins} />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/account' element={<Account />} />
					<Route path='/coin/:coinId' element={<CoinPage />}>
						<Route path=':coinId' />
					</Route>
				</Routes>
				{/* <Footer /> */}
			</AuthContextProvider>
		</ThemeProvider>
	)
}

export default App
