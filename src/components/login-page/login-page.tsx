import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './login-page.styles';
import { RouteName } from '../../const';

interface Props {
    state: {
        loginValid: boolean;
        passwordValid: boolean;
    };
    onSubmitForm: () => void;
    onChange: () => void;
    loginRef: React.RefObject<HTMLInputElement>;
    passwordRef: React.RefObject<HTMLInputElement>;
}

const LoginPage: React.FunctionComponent<Props> = ({
  state, onSubmitForm, onChange, loginRef, passwordRef,
}: Props) => {
  const classes = useStyles();

  return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Войти
                    </Typography>
                    <form className={classes.form} method="post" onSubmit={onSubmitForm}>
                        <TextField
                            InputProps={state.loginValid === false ? { className: classes.notValidInput } : {}}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Электронная почта"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            inputRef={loginRef}
                            onChange={onChange}
                        />
                        <TextField
                            InputProps={state.passwordValid === false ? { className: classes.notValidInput } : {}}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            inputRef={passwordRef}
                            onChange={onChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Войти
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href={RouteName.SIGN_UP} variant="body2">
                                    {'Нет аккаунта? Зарегистрироваться'}
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <Link href={RouteName.MAIN} variant="body2">
                                    {'На главную'}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
  );
};

export default LoginPage;
