import useRouter from '../hooks/useRouter'

function About() {
	const { push } = useRouter()

	const handleClick = (e) => {
		push('1', '/')
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
