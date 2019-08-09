import React from 'react';
import {shallow} from 'enzyme';
import SearchCta from './SearchCta';


describe('<Explorer /> Component', ()=>{
    let wrapper;
    beforeEach(()=> wrapper = shallow( <SearchCta 
        iconImage='smile'
    />))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render the value of <Icon /><Input />', () => {
        expect(wrapper.text()).toEqual('<Icon /><Input />');
    });
})

