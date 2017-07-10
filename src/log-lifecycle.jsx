import React from 'react'

const getDisplayName = Component => (
	Component.displayName ||
	Component.name ||
	(typeof Component === 'string' ? Component : 'Component')
)

export default (Component) => {
	return class extends React.Component {

		componentWillMount() {
			console.log('Will Mount', getDisplayName(Component))
		}

		componentWillUnmount() {
			console.log('Will Unmount', getDisplayName(Component))
		}

		componentDidUpdate() {
			console.log('Did update', getDisplayName(Component))
		}

		componentWillReceiveProps(nextProps) {
			console.log('Will receive props', getDisplayName(Component), nextProps)
		}

		render() {
			return <Component {...this.props}/>
		}
	}
}
