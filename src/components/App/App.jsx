import React, { Fragment, Component } from 'react';
import LeftPanel from '../LeftPanel';
import MiddlePanel from "../MiddlePanel";
import RightPanel from "../RightPanel";
import  './App.scss';

//fontawsome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFile , faSearch, faCodeBranch, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add( faFile, faSearch, faCodeBranch, faTimes );

class App extends Component {
    state={
        content: 'Explorer',
        selectedIndex: 0
    }
    handleShowRightView = (icon,idx) =>{
        //show custom label based on icon name
        let label = '';
        switch (icon) {
        case 'file':
            label = 'Explorer';
            break;
        case 'search':
            label = 'Search';
            break;
        case 'code-branch':
            label = 'Source Control';
            break;
        default:
            label = ''
        }
        //set value in state
        this.setState({
            content: label,
            selectedIndex: idx
        })
    }
    
    render() {
        const {content,selectedIndex} = this.state;
        return (
            <Fragment>
                <div className="appCta">
                    <LeftPanel handleShowRightView={this.handleShowRightView} selectedIndex={selectedIndex}/>
                    <MiddlePanel content={content}/>
                    <RightPanel />
                </div>
            </Fragment>
        );
    }
}

export default App;
