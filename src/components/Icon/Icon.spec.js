import React from 'react';
import {shallow} from 'enzyme';
import Icon from './Icon';


describe('<Icon /> Component', ()=>{
    let wrapper;
    beforeEach(()=> wrapper = shallow( <Icon 
        iconImage='smile'
    />))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render the value of icon image', () => {
        wrapper.setProps({ iconImage: 'file' });
        expect(wrapper.text()).toEqual('<FontAwesomeIcon />');
    });
})

