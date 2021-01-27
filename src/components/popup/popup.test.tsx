import * as React from 'react';
import { mount, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Popup from './popup';
import { mockFunction } from '../../utils/common';

configure({ adapter: new Adapter() });

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

const MockComponent = () => (<div>Test</div>);

describe('Popup', () => {
  it('Popup', () => {
    const wrapper = mount(
            <Popup
                title={'Title'}
                openPopup={true}
                setOpenPopup={mockFunction}>
                <MockComponent />
            </Popup>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
