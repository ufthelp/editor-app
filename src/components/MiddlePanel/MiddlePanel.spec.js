import React from 'react';
import {
    mount
} from "enzyme";
import MiddlePanel from './MiddlePanel';

describe('<MiddlePanel />', () => {
            let wrapper;
            beforeEach(() => wrapper = mount( < MiddlePanel content = {
                    "EXPLORER"
                }
                visibility
                /> ));

                it('should render correctly', () => expect(wrapper).toMatchSnapshot());

                it('should render <Text />', () => {
                    expect(wrapper.exists()).toBe(true)
                })

                it('Props is set to EXPLORER', () => {
                    expect(wrapper.prop('content')).toEqual('EXPLORER')
                })
            })