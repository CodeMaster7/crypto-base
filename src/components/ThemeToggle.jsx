import { useContext } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { ThemeContext } from '../context/ThemeContext'

function ThemeToggle() {
	const { theme, setTheme } = useContext(ThemeContext)
    console.log("🚀 ~ { theme, setTheme }", { theme, setTheme })

	const themeColor = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

	return (
		<div className='p-2'>
			{theme === 'dark' ? (
				<div
					className='flex items-center cursor-pointer'
					onClick={themeColor}>
					<HiSun className='text-primary text-2xl mr-2'/> Light Mode
				</div>
			) : (
				<div
					className='flex items-center cursor-pointer'
					onClick={themeColor}>
					<HiMoon className='text-primary text-2xl mr-2'/> Dark Mode
				</div>
			)}
		</div>
	)
}
export default ThemeToggle
