import CoinSection from '../components/CoinSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Tranding from '../components/Tranding'
import { UserAuth } from '../context/AuthContext'

function HomePage({ coins }) {
	const { user } = UserAuth()

	return (
		<div>
			{user?.email ? (
				<>
					<Navbar />
					<CoinSection coins={coins} />
					<Tranding />
					<Footer />
				</>
			) : (
				<>
					<Navbar />
					<Tranding />
					<Footer />
				</>
			)}
		</div>
	)
}
export default HomePage
