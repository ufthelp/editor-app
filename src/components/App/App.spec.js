import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import LeftPanel from "../LeftPanel";
import MiddlePanel from "../MiddlePanel";
import RightPanel from "../RightPanel";

describe('<App /> Component', ()=>{
    let wrapper;
    beforeEach(()=>wrapper = shallow(<App />))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should contain a State as content',()=>{
        expect(wrapper.state('content')).toBe('Explorer');
    })

    it('should contain a <LeftPanel /> component',()=>{
        expect(wrapper.containsMatchingElement(<LeftPanel 
                handleShowRightView={wrapper.instance().handleShowRightView}
                selectedIndex={1}/>)
            ).toEqual(false);
    })

    it('should contain a <MiddlePanel /> component',()=>{
        expect(wrapper.containsMatchingElement(<MiddlePanel 
            content={wrapper.instance().state.content}
            visibility />
        )).toEqual(true);
    })

    it('should contain a <RightPanel /> component',()=>{
        expect(wrapper.containsMatchingElement(<RightPanel />)).toEqual(true);
    })
})

