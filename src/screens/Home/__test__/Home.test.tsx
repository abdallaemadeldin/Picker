import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import { RealmProvider } from 'src/context/realm.context';
import Home from '../Home';

jest.mock("react-redux", () => {
    return {
        useSelector: () => ({
            values: []
        }),
        useDispatch: jest.fn
    }
})

it('renders correctly', () => {
    const component = (
        <SafeAreaProvider initialMetrics={{ insets: { top: 0, left: 0, bottom: 0, right: 0 }, frame: { height: 0, width: 0, x: 0, y: 0 } }}>
            <RealmProvider>
                <Home />
            </RealmProvider>
        </SafeAreaProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
});