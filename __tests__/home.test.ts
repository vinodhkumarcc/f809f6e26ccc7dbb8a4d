import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import HomeScreen from '../Screens/Home';

const createMockStore = configureMockStore();
const store = createMockStore({});


const createTestProps = () => {
	navigation : {
	navigate: jest.fn()
}
}


describe('Details Screen', () => {
	describe('Rendering', () => {

const props = createTestProps();
const wrapper = shallow(

	<Provider store={store}>
				<HomeScreen {...props}/>
	</Provider>
)

		it('should render view', () => {
			expect(wrapper.find('.home-wrapper')).toHaveLength(0);
		})
	});
});