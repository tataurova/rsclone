import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LoginPage from './login-page';
import { mockFunction } from '../../utils/common';

configure({ adapter: new Adapter() });

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('<LoginPage />', () => {
  const onSubmit = jest.fn(mockFunction);

  const state = {
    loginValid: true,
    passwordValid: true,
  };
  const loginRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();

  it('When you click on the button, onSubmit function is called', () => {
    const main = mount(
            <LoginPage
                state={state}
                onSubmit={onSubmit}
                onChange={mockFunction}
                loginRef={loginRef}
                passwordRef={passwordRef}
            />,
    );

    expect(main.find(LoginPage)).toHaveLength(1);
    expect(main.find(Button)).toHaveLength(1);
    expect(main.find(TextField)).toHaveLength(2);
    main.find('form').simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
});
