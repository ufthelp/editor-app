import React from 'react';
import {
    shallow,
} from "enzyme";
import LeftPanel from './LeftPanel';
import Icon from '../Icon';

describe('<LeftPanel />', () => {
            const handleClick = jest.fn();
            let wrapper;
            beforeEach(() => wrapper = shallow( 
                < LeftPanel 
                    handleShowRightView={handleClick} 
                    selectedIndex={1}
                /> ));

            it('should render correctly', () => expect(wrapper).toMatchSnapshot());

            it('should contain 3 <Icon /> component',()=>{
               expect(wrapper.find(Icon).length).toBe(3);
            })
})
