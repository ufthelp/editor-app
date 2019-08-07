import React from 'react'
import {shallow} from 'enzyme'
import TreeView from './TreeView'


describe('<TreeView /> Component', ()=>{
    let wrapper;
    beforeEach(()=>wrapper = shallow(<TreeView />))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should contain a State as content',()=>{
        expect(wrapper.state('content')).toBe('Explorer');
    })
})

