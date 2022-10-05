function Root() {
	const handleClick = () => {
		window.history.pushState('2', '', '/about')
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
