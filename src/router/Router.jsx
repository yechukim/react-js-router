import useRouter from '../hooks/useRouter'

function Router({ children }) {
	const { path } = useRouter()

	return children.map((child) => {
		const { path: route, component } = child.props
		return path === route ? component : null
	})
}

export default Router
