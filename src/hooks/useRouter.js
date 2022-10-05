export default function useRouter() {
	const path = window.location.pathname
	const navigate = (data, url) => window.history.pushState(data, '', url)

	return { path, navigate }
}
