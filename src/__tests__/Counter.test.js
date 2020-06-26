import React from 'react';
import { shallow } from 'enzyme';
import Counter from './../Counter';

describe('Testing Counter', () => {
    let component = new Counter();
    
    beforeEach(() => {
        // let component = new Counter();
    });

    it('should render correctly', () => {
        const wrapper = shallow(
            // <Counter count={5} />
            <Counter />
        );

        expect(wrapper).toMatchSnapshot();
        // wrapper.setProps({ count: 10 });
        /*   expect(wrapper).toMatchSnapshot(); */

    });

    it('It should be execute some between 2 values', () => {
        expect(component.some(1, 2)).toBe(3);
    });
});