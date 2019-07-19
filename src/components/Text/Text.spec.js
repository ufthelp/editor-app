import React from 'react';
import {
    shallow
} from "enzyme";
import Text from './Text';

describe('<Text />', () => {
            let wrapper;
            beforeEach(() => wrapper = shallow( < Text content = {
                    'Hello World'
                }
                / > ));

                it('should render a <div />', () => {
                    expect(wrapper.find('div').length).toEqual(1)
                })

                it('should render the value of Text', () => {
                    expect(wrapper.text()).toEqual('Hello World');
                });
            })