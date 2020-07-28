import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import { configure } from 'enzyme';
import EmployeeList from './Component/EmpoyeesList'
import Employee from './Component/Employee'

configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const employeeList = shallow(
    <App />
  );

  const list = <Employee employee={{ "job": "Janitor", "name": "Charlie" }} />
  const result = employeeList.find('EmployeeList').dive().find('Employee').find(Object)
  expect(result[0]).toMatchObject(list);

});
