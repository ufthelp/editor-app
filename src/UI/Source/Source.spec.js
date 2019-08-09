import React from 'react';
import {shallow} from 'enzyme';
import Source from './Source';


describe('<Source /> Component', ()=>{
    let wrapper;
    beforeEach(()=> wrapper = shallow( <Source 
        fontSize="14"
    />))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render the value of title prop', () => {
        wrapper.setProps({ value: 'file' });
        expect(wrapper.text()).toEqual('<ReactAce />');
    });
})

