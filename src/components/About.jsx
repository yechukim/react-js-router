function About() {
	const handleClick = () => {
		window.history.pushState('1', '', '/')
	}
	return (
		<>
			<div className="route">about</div>
			<div className="route btn" onClick={handleClick}>
				go main
			</div>
		</>
	)
}

export default About
