import React from 'react';
import {shallow} from 'enzyme';
import Input from './Input';


describe('<Input /> Component', ()=>{
    let wrapper;
    beforeEach(()=> wrapper = shallow( <Input 
        iconImage='smile'
    />))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render the value of title prop', () => {
        wrapper.setProps({ title: 'file' });
        expect(wrapper.text()).toEqual('file');
    });
})

