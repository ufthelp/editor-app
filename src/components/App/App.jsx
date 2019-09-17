import React, { Fragment, Component } from 'react'
import LeftPanel from '../LeftPanel'
import MiddlePanel from '../MiddlePanel'
import RightPanel from '../RightPanel'
import './App.scss'

//fontawsome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faSearch, faCodeBranch, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons'
library.add(faFile, faSearch, faCodeBranch, faTimes, faChevronRight)

// @ts-check
class App extends Component {
	state = {
		content: 'Explorer',
		selectedIndex: 0,
		isVisible: true
	}

	// To show and hide middlepanel
	clickCount = 0

	handleShowRightView = (icon, idx) => {
		//show custom label based on icon name
		let label = ''
		let visible = true
		switch (icon) {
			case 'file':
				label = 'Explorer'
				break
			case 'search':
				label = 'Search'
				break
			case 'code-branch':
				label = 'Source Control'
				break
			default:
				label = ''
		}

		//when user clicks twice on the same left panel icon, hide the middle panel
		this.clickCount++
		if (this.clickCount === 1) {
			visible = true
		} else if (this.clickCount === 2) {
			visible = false
			this.clickCount = 0
		}
		//set value in state
		this.setState({
			content: label,
			selectedIndex: idx,
			isVisible: visible
		})
	}

	render() {
		const { content, selectedIndex, isVisible } = this.state
		return (
			<Fragment>
				<div className="appCta">
					<LeftPanel handleShowRightView={this.handleShowRightView} selectedIndex={selectedIndex} />
					<MiddlePanel content={content} visibility={isVisible} />
					<RightPanel />
				</div>
			</Fragment>
		)
	}
}

export default App
