import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './sign-up.styles';
import { RouteName } from '../../const';

interface Props {
    state: {
        nameValid: boolean;
        loginValid: boolean;
        passwordValid: boolean;
    };
    onSubmitForm: () => void;
    onChange: () => void;
    nameRef: React.RefObject<HTMLInputElement>;
    loginRef: React.RefObject<HTMLInputElement>;
    passwordRef: React.RefObject<HTMLInputElement>;
}

const SignUp: React.FunctionComponent<Props> = ({
  state, onSubmitForm, onChange, nameRef, loginRef, passwordRef,
}: Props) => {
  const classes = useStyles();

  return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Регистрация
                </Typography>
                <form className={classes.form} onSubmit={(evt) => evt.preventDefault()}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                InputProps={state.nameValid === false ? { className: classes.notValidInput } : {}}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Имя"
                                autoFocus
                                onChange={onChange}
                                inputRef={nameRef}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                InputProps={state.loginValid === false ? { className: classes.notValidInput } : {}}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Электронная почта"
                                name="email"
                                autoComplete="email"
                                onChange={onChange}
                                inputRef={loginRef}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                InputProps={state.passwordValid === false ? { className: classes.notValidInput } : {}}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={onChange}
                                inputRef={passwordRef}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onSubmitForm}
                    >
                        Зарегистрироваться
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href={RouteName.LOGIN} variant="body2">
                                Уже есть аккаунт? Войти
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <Link href={RouteName.MAIN} variant="body2">
                                На главную
                            </Link>
                        </Grid>
                    </Grid>

                </form>
            </div>
        </Container>
  );
};

export default SignUp;