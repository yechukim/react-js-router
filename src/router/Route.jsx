import React, { useEffect } from 'react'
import useRouter from '../hooks/useRouter'

function Route({ component }) {
	const { path } = useRouter()
	return component
}

export default Route
