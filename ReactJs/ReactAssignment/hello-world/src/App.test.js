import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Greet, getName } from './Component/Greet'
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

test('renders learn react link', () => {

  // const wrapper = mount(
  //   <App />
  // );
  // const h1 = wrapper.find('.h1');
  // //const result = wrapper.find('.h1');
  // expect(h1.text()).toBe('Hello Himali');

  const greet = shallow(
    <App />
  )

  expect(greet.find('Greet').dive().find('h1').text()).toEqual('Hello Himali')



});
