import React from 'react';
import {
    shallow
} from "enzyme";
import Tab from './Tab';

describe('<Tab />', () => {
            let wrapper;
            beforeEach(() => wrapper = shallow(<Tab 
                    activeTab={'Index.jsx'} 
                    header={'Index.jsx'} 
                    onClick={()=>jest.fn()}
                />
                ));

            it('should render correctly', () => expect(wrapper).toMatchSnapshot());
            
            it('should render a <li />', () => {
                expect(wrapper.find('li').length).toEqual(1);
            });

            it('should render the value of activeTab', () => {
                wrapper.setProps({ activeTab: 'test' });
                expect(wrapper.text()).toEqual('<Icon />Index.jsx<Icon />');
            });

            it('should get the default state', () => {
               expect(wrapper.state('hover')).toBe(false);
            });
})
