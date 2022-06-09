import CoinSection from '../components/CoinSection'
import Tranding from '../components/Tranding'

function Home({ coins }) {
	return (
		<div>
			<CoinSection coins={coins} />
			<Tranding />
		</div>
	)
}
export default Home
