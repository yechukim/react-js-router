import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Route from './router/Route'
import Root from './components/Root'
import About from './components/About'
import Router from './router/Router'

const container = document.getElementById('root')

ReactDOM.createRoot(container).render(
	<Router>
		<Route path="/" component={<Root />} />
		<Route path="/about" component={<About />} />
	</Router>
)
