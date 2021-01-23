import * as React from 'react';
import { NAME_MIN_LENGTH, LoginInput } from '../../const';
import { extend } from '../../utils/common';
import {
  isLoginEmpty,
  isLoginValid,
  isPasswordEmpty,
  isPasswordValid,
} from '../with-authentication/with-authentication';

const isNameValid = (input, evt) => input.current.validity.valid && evt.target.value.length >= NAME_MIN_LENGTH;

const isFormValid = (state) => state.nameValid === true && state.loginValid === true && state.passwordValid === true;
const isNameEmpty = (state) => state.nameValid === null;

interface Props {
    onSubmitForm: ({ name, login, password }: {name: string; login: string; password: string}) => void;
}

interface State {
    nameValid: null | string;
    loginValid: null | string;
    passwordValid: null | string;
}

const withSignUp = (Component) => {
  class WithSignUp extends React.PureComponent<Props, State> {
        private nameRef: React.RefObject<HTMLInputElement>;

        private loginRef: React.RefObject<HTMLInputElement>;

        private passwordRef: React.RefObject<HTMLInputElement>;

        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);

          this.state = {
            nameValid: null,
            loginValid: null,
            passwordValid: null,
          };

          this.nameRef = React.createRef();
          this.loginRef = React.createRef();
          this.passwordRef = React.createRef();
        }

        handleChange(evt) {
          evt.preventDefault();
          const { name } = evt.target;

          if (name === LoginInput.NAME) {
            this.setState(extend(this.state, { nameValid: isNameValid(this.nameRef, evt) }));
          }
          if (name === LoginInput.EMAIL) {
            this.setState(extend(this.state, { loginValid: isLoginValid(this.loginRef, evt) }));
          }
          if (name === LoginInput.PASSWORD) {
            this.setState(extend(this.state, { passwordValid: isPasswordValid(this.passwordRef, evt) }));
          }
        }

        handleSubmit(evt) {
          evt.preventDefault();
          if (isLoginEmpty(this.state)) {
            this.setState(extend(this.state, { loginValid: false }));
          }
          if (isPasswordEmpty(this.state)) {
            this.setState(extend(this.state, { passwordValid: false }));
          }
          if (isNameEmpty(this.state)) {
            this.setState(extend(this.state, { nameValid: false }));
          }
          if (isFormValid(this.state)) {
            const { onSubmitForm } = this.props;
            onSubmitForm({
              name: this.nameRef.current.value,
              login: this.loginRef.current.value,
              password: this.passwordRef.current.value,
            });
          }
        }

        render() {
          return <Component
                state = {this.state}
                onChange = {this.handleChange}
                onSubmit = {this.handleSubmit}
                nameRef = {this.nameRef}
                loginRef = {this.loginRef}
                passwordRef = {this.passwordRef}
                {...this.props}
            />;
        }
  }
  return WithSignUp;
};

export default withSignUp;
