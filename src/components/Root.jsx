import useRouter from '../hooks/useRouter'

function Root() {
	const { push } = useRouter()

	const handleClick = () => {
		push('2', '/about')
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
