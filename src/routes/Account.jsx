import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import SavedCoin from '../components/SavedCoin'
// import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'

function Account() {
	const { user, logout } = UserAuth()
	const navigate = useNavigate()

	const handleSignOut = async () => {
		try {
			await logout()
			navigate('/')
		} catch (e) {
			console.log(e.message)
		}
	}

	if (user) {
		return (
			<div className='max-w-[1140px] mx-auto'>
				{/* <Navbar /> */}
				<div className='flex justify-between items-center my-12 py-8 rounded-div'>
					<div>
						<h1 className='text-2xl font-bold'>Account</h1>
						<div>
							<p>Welcome, {user?.email}</p>
						</div>
					</div>
					<ThemeToggle />
					<div>
						<Link to='/homepage' className='p-4 font-bold'>
							Back to the List
						</Link>

						<button
							onClick={handleSignOut}
							className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'>
							Sign Out
						</button>
					</div>
				</div>
				<div className='flex justfiy-between items-center my-12 py-8 rounded-div'>
					<div className='w-full min-h-[300px]'>
						<h1 className='text-2xl font-bold py-4'>Watch List</h1>
						<SavedCoin />
					</div>
				</div>
			</div>
		)
	} else {
		return <Navigate to='/signin' />
	}
}
export default Account
