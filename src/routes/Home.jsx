import Features from '../partials/Features'
import Header from '../partials/Header'
import HeroBlocks from '../partials/HeroBlocks'
import HeroHome from '../partials/HeroHome'
import LandingFooter from '../partials/LandingFooter'

function Home() {
	return (
		<>
			<Header />
            <HeroHome />
            <HeroBlocks />
            <Features />
            <LandingFooter />
		</>
	)
}
export default Home
