// Enzyme is used instead of react-shallow-renderer
// for rendering tests
// Enzyme needs enzyme-adapter-react-16
// and raf (request animation frame polyfill)
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';
import Enzyme from 'enzyme';

Enzyme.configure({
	adapter: new Adapter()
});

DotEnv.config({ path: '.env.test'});