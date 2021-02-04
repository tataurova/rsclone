import * as React from 'react';
import { extend } from '../../utils/common';
import { LOGIN_MIN_LENGTH, PASSWORD_MIN_LENGTH, LoginInput } from '../../const';

export const isLoginValid = (input, evt) => input.current.validity.valid && evt.target.value.length >= LOGIN_MIN_LENGTH;

export const isPasswordValid = (input, evt) => input.current.validity.valid && evt.target.value.length >= PASSWORD_MIN_LENGTH;

export const isFormValid = (state) => state.loginValid === true && state.passwordValid === true;

export const isLoginEmpty = (state) => state.loginValid === null;

export const isPasswordEmpty = (state) => state.passwordValid === null;

interface Props {
    onSubmitForm: ({ login, password }: {login: string; password: string}) => void;
}

interface State {
    loginValid: null | string;
    passwordValid: null | string;
}

const withAuthentication = (Component) => {
  class WithAuthentication extends React.PureComponent<Props, State> {
        private loginRef: React.RefObject<HTMLInputElement>;

        private passwordRef: React.RefObject<HTMLInputElement>;

        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);

          this.state = {
            loginValid: null,
            passwordValid: null,
          };

          this.loginRef = React.createRef();
          this.passwordRef = React.createRef();
        }

        handleChange(evt) {
          evt.preventDefault();
          const { name } = evt.target;
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
          if (isFormValid(this.state)) {
            const { onSubmitForm } = this.props;

            onSubmitForm({
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
                loginRef = {this.loginRef}
                passwordRef = {this.passwordRef}
                {...this.props}
            />;
        }
  }
  return WithAuthentication;
};

export default withAuthentication;
