import React from 'react';
import { render} from 'react-dom';
import test_component_2 from '../../src';

const App = () => (
    <test_component_2 />
);

render(<App />, document.getElementById("root"));