import CoinSearch from '../components/CoinSearch'
import Tranding from '../components/Tranding'

function Home({ coins }) {
	return (
		<div>
			<CoinSearch coins={coins} />
            <Tranding />
		</div>
	)
}
export default Home
