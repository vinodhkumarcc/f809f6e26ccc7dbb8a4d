import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import DetailsScreen from '../Screens/Details';

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
				<DetailsScreen {...props}/>
	</Provider>
)

it('should render view', () => {
	expect(wrapper.find('.details-wrapper')).toHaveLength(0);
})

	});
});