import React from 'react'

export default Component =>
	class WithLoading extends React.Component {
		componentDidMount() {
			console.log('did mounttttttt')
		}
		componentDidUpdate() {
			console.log('did update')
		}
		render() {
			return React.createElement(Component, this.props, null)
		}
	}
