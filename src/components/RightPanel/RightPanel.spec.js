import React from 'react';
import { shallow } from "enzyme";
import RightPanel from './RightPanel';
import Tabs from '../Tabs';

describe('<RightPanel />', () => {
            let wrapper;
            beforeEach(() => wrapper = shallow( < RightPanel /> ));

            it('should render correctly', () => expect(wrapper).toMatchSnapshot());

            it('should contain a <Tabs /> component',()=>{
                expect(wrapper.containsMatchingElement(<Tabs children={[]}/>)).toEqual(false);
            })
})
