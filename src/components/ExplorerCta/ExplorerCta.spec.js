import React from 'react';
import {shallow} from 'enzyme';
import ExplorerCta from './ExplorerCta';
import TreeView from "../TreeView";


describe('<Explorer /> Component', ()=>{
    let wrapper;
    beforeEach(()=> wrapper = shallow( <ExplorerCta 
    />))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render  TreeView', () => {
        expect(wrapper.text()).toEqual('<TreeView />');
    });
})

