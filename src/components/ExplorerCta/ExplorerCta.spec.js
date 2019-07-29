import React from 'react';
import {shallow} from 'enzyme';
import ExplorerCta from './ExplorerCta';


describe('<Explorer /> Component', ()=>{
    let wrapper;
    beforeEach(()=> wrapper = shallow( <ExplorerCta 
        iconImage='smile'
    />))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render the value of icon image', () => {
        wrapper.setProps({ iconImage: 'file' });
        expect(wrapper.text()).toEqual('<FontAwesomeIcon />');
    });
})

