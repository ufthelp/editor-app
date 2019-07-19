import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab';

import './Tabs.scss';

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array),
    }

    state = {
        activeTab: this.props.children[0].props.header
    }

    onClickTabItem = (tab) => {
        this.setState({
            activeTab: tab
        });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return ( 
            <div >
                <ol className = "tabList" > {
                    children.map((child) => {
                        const {
                            header
                        } = child.props;

                        return ( 
                            <Tab activeTab = {
                                    activeTab
                                }
                                key = {
                                    header
                                }
                                header = {
                                    header
                                }
                                onClick = {
                                    onClickTabItem
                                }
                                />
                        );
                    })
                } 
                </ol> 
                <div className = "tabContent" > {
                    children.map((child) => {
                        if (child.props.header !== activeTab) return undefined;
                        return child.props.children;
                    })
                } 
                </div> 
            </div>
        );
    }
}

export default Tabs;