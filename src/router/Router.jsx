import { useEffect, useState } from 'react'
import useRouter from '../hooks/useRouter'

function Router({ children }) {
	const { path } = useRouter()

	const [current, setCurrent] = useState(path)

	useEffect(() => {
		const changeLocation = () => {
			setCurrent(window.location.pathname)
		}
		window.addEventListener('popstate', changeLocation)

		return () => {
			window.removeEventListener('popstate', changeLocation)
		}
	}, [])

	return children.map((child) => {
		const { path: route, component } = child.props
		return current === route ? component : null
	})
}

export default Router
