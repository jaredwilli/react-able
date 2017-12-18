// setup file
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
/* eslint-disable */
global.shallow = shallow;
global.render = render;
global.mount = mount;
/* eslint-enable */
