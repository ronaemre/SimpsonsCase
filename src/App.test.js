import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './components/App';
import WebNavbar from './components/WebNavbar'
import User from './components/Users/User/User'
import AddUser from './components/AddUser'
import Details from './components/Details'

test('when ı am on addUser page ı should to see form container and input fields', () => {
  render(<AddUser />);

  const linkElement = screen.getByTestId("container");
  expect(linkElement).toBeInTheDocument();

  const linkElement1 = screen.getByTestId("name");
  expect(linkElement1).toBeInTheDocument();


  const linkElement2 = screen.getByTestId("job");
  expect(linkElement2).toBeInTheDocument();


  const linkElement3 = screen.getByTestId("image");
  expect(linkElement3).toBeInTheDocument();


  const linkElement4 = screen.getByTestId("about");
  expect(linkElement4).toBeInTheDocument();

  //ı should see Add User button
  const linkElement5 = screen.getByText(/Add User/i);
  expect(linkElement5).toBeInTheDocument();

});

test('is Detail page working correct', () => {
  render(<Details />);

  const linkElement = screen.getByTestId("name");
  expect(linkElement).toBeInTheDocument();


  const linkElement2 = screen.getByTestId("job");
  expect(linkElement2).toBeInTheDocument();


  const linkElement3 = screen.getByTestId("container");
  expect(linkElement3).toBeInTheDocument();
});


test('is Navbar working correctly', () => {
  render(<App />);

  const linkElement = screen.getByTestId("Add-user-button");
  expect(linkElement).toBeInTheDocument();


});
