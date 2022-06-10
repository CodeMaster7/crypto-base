import { Link } from 'react-router-dom'
import HeroImage from '../assets/images/crypto-landing.png'

function HeroHome() {
	return (
		<>
			{/* Hero Section */}
			<section className='text-gray-700 body-font'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
							The Future of Crypto
							<br className='hidden lg:inline-block' />
							is here Join us!
						</h1>
						<p className='mb-8 leading-relaxed max-w-[80%]'>
							Copper mug try-hard pitchfork pour-over freegan
							heirloom neutra air plant cold-pressed tacos poke
							beard tote bag. Heirloom echo park mlkshk tote bag
							selvage hot chicken authentic tumeric truffaut
							hexagon try-hard chambray.
						</p>
						<div className='flex justify-center'>
							<Link
								to='/signin'
								className='mr-5 hover:text-gray-900'>
								<button className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
									Get Started
								</button>
							</Link>
							<button className='ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg'>
								Learn More
							</button>
						</div>
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<img
							className='object-cover object-center rounded'
							alt='hero'
							src={HeroImage}
						/>
					</div>
				</div>
			</section>
		</>
	)
}
export default HeroHome
