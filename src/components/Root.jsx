import useRouter from '../hooks/useRouter'

function Root() {
	const { navigate } = useRouter()

	const handleClick = () => {
		navigate('2', '/about')
	}
	return (
		<>
			<div className="route">root</div>
			<div className="route btn" onClick={handleClick}>
				about
			</div>
		</>
	)
}

export default Root
