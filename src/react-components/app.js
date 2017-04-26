import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './HomePage'
import Typekit from 'react-typekit'

class App extends React.Component {
	constructor () {
		super()
	}

	render () {
		return (
			<HomePage />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
