import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from '../App';

jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('../Features/Helper/utils', () => ({
  searchByName: jest.fn(),
}));

describe('App Component', () => {
  it('renders the component correctly', () => {
    const {getByText, getByPlaceholderText} = render(<App />);

    expect(getByText('Search')).toBeTruthy();
    expect(getByPlaceholderText('Enter name')).toBeTruthy();
  });

  it('handles search and displays results', async () => {
    const mockSearchByName = jest.fn(() => ({
      name: 'TestUser',
      rank: 1,
      bananas: 10,
    }));
    require('../Features/Helper/utils').searchByName = mockSearchByName;

    const {getByText, getByPlaceholderText, findByText} = render(<App />);

    const searchInput = getByPlaceholderText('Enter name');
    const searchButton = getByText('Search');
    fireEvent.changeText(searchInput, 'TestUser');
    fireEvent.press(searchButton);

    const resultName = findByText('TestUser');
    const resultRank = findByText('1');
    const resultBananas = findByText('10');

    expect(resultName).toBeTruthy();
    expect(resultRank).toBeTruthy();
    expect(resultBananas).toBeTruthy();
  });
});
