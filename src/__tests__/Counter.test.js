import React from 'react';
import { shallow } from 'enzyme';
import Counter from './../Counter';

describe('Testing Counter', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            // <Counter count={5} />
            <Counter />
        );

        expect(wrapper).toMatchSnapshot();
        // wrapper.setProps({ count: 10 });
     /*   expect(wrapper).toMatchSnapshot(); */

    });
});