import { useState, useEffect, createContext } from 'react'

// get initial theme
const getInitialTheme = () => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPrefs = window.localStorage.getItem('color-theme')
        console.log("🚀 ~ storedPrefs", storedPrefs)
		if (typeof storedPrefs === 'string') {
			return storedPrefs
		}

		const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
		if (userMedia.matches) {
			return 'dark'
		}
	}
	return 'light'
}

// set up context
export const ThemeContext = createContext()

export const ThemeProvider = ({ initialTheme, children }) => {
    console.log('🚀 ~ initialTheme', { initialTheme, children })
	const [theme, setTheme] = useState(getInitialTheme)

	const rawSetTheme = (theme) => {
        console.log("🚀 ~ theme", theme)
		const root = window.document.documentElement
        console.log("🚀 ~ root", root)
		const isDark = theme === 'dark'

		root.classList.remove(isDark ? 'light' : 'dark')
		root.classList.add(theme)

		localStorage.setItem('color-theme', theme)
	}

	if (initialTheme) {
        console.log("🚀 ~ initialTheme2", initialTheme)
		rawSetTheme(initialTheme)
	}

	useEffect(() => {
		rawSetTheme(theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
