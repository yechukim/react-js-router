import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Route from './router/Route'
import Router from './router/Router'
import Root from './components/Root'
import About from './components/About'

const container = document.getElementById('root')

ReactDOM.createRoot(container).render(
	<Router>
		<Route path="/" component={<Root />} />
		<Route path="/about" component={<About />} />
	</Router>
)
