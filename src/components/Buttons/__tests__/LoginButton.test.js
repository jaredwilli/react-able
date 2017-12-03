import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
// eslint-disable-next-line
import * as setupTests from '../../../setupTests';

import LoginButton from '../LoginButton';
import { PROVIDERS } from '../../../utils/loginProviders';

describe('LoginButton component', () => {
    let buttonClicks = 0;

    const buttonClicked = jest.fn(provider => {
        // console.log(provider);
        buttonClicks += 1;
        return `${provider} login`;
    });

    it('throws an error if onClick is excluded', () => {
        const stub = sinon.stub(console, 'error');
        shallow(<LoginButton />);

        expect(stub.called).toEqual(true);
        /* expect(stub.calledWithExactly('Warning: Failed prop type: The prop `className` is marked as required in `LoginButton`, but its value is `undefined`. in LoginButton (at LoginButton.test.js:30)')).toBe(true) */
        console.error.restore();
    });

    it('should have initial props with bare minimum button definition with only onClick', () => {
        const wrapper = shallow(<LoginButton onClick={() => buttonClicked(PROVIDERS[0].provider)} />);

        // console.log(wrapper.debug());
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('button').props().type).toBe('button');
        expect(wrapper.find('button').props().className).toBe('login-button facebook');

        expect(buttonClicked('fbProvider')).toEqual('fbProvider login');
        expect(buttonClicks).toEqual(1);

        wrapper.find('button').simulate('click');
        expect(buttonClicks).toEqual(2);
    });

    it('should set the props correctly', () => {
        const wrapper = shallow(
            <LoginButton
                className="facebook"
                displayName="Facebook"
                provider="fbProvider"
                onClick={() => buttonClicked('fbProvider')}
            />
        );

        // console.log(wrapper.debug());
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('button').props().type).toBe('button');

        expect(wrapper.find('i').props().className).toEqual('fa fa-facebook');
        expect(wrapper.find('span').text()).toBe('Sign in with Facebook');

        expect(wrapper.find('button').props().className).toBe('login-button facebook');

        wrapper.find('button').simulate('click');
        expect(buttonClicks).toEqual(3);
        expect(buttonClicked('fbProvider')).toEqual('fbProvider login');
    });
});
