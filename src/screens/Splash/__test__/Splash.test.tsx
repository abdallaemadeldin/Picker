import React from 'react';
import renderer from 'react-test-renderer';
import Splash from '../Splash';

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            replace: jest.fn(),
        }),
    };
});

it('renders correctly', () => {
    const tree = renderer.create(<Splash />).toJSON();
    expect(tree).toMatchSnapshot();
});