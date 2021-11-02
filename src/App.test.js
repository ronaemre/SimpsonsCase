import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './components/App';
import WebNavbar from './components/WebNavbar'
import User from './components/Users/User/User'
import AddUser from './components/AddUser'

test('renders learn react link', () => {
  render(<AddUser />);
  const linkElement = screen.getByTestId("container");
  expect(linkElement).toBeInTheDocument();
});
