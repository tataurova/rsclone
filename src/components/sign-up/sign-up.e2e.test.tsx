import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SignUp from './sign-up';
import { mockFunction } from '../../utils/common';

configure({ adapter: new Adapter() });

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('<SignUp />', () => {
  const onSubmit = jest.fn(mockFunction);

  const state = {
    nameValid: true,
    loginValid: true,
    passwordValid: true,
  };
  const nameRef = React.createRef<HTMLInputElement>();
  const loginRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();

  it('When you click on the button, onSubmit function is called', () => {
    const main = mount(
            <SignUp
                state={state}
                onSubmit={onSubmit}
                onChange={mockFunction}
                loginRef={loginRef}
                passwordRef={passwordRef}
                nameRef={nameRef}
            />,
    );

    expect(main.find(SignUp)).toHaveLength(1);
    expect(main.find(Button)).toHaveLength(1);
    expect(main.find(TextField)).toHaveLength(3);
    main.find('form').simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
});
