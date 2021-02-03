import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import useStyles from './sign-up.styles';
import { RouteName } from '../../const';

interface Props {
    state: {
        nameValid: boolean;
        loginValid: boolean;
        passwordValid: boolean;
    };
    onSubmit: () => void;
    onChange: () => void;
    nameRef: React.RefObject<HTMLInputElement>;
    loginRef: React.RefObject<HTMLInputElement>;
    passwordRef: React.RefObject<HTMLInputElement>;
}

const SignUp: React.FunctionComponent<Props> = ({
  state, onSubmit, onChange, nameRef, loginRef, passwordRef,
}: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  function handleClick(route) {
    history.push(route);
  }

  return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t('Registration')}
                </Typography>
                <form className={classes.form} onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                InputProps={state.nameValid === false ? { className: classes.notValidInput } : {}}
                                autoComplete="fname"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label={t('Name')}
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
                                label={t('Email')}
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
                                label={t('Password')}
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
                    >
                        {t('Register')}
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href={`${RouteName.PUBLIC_URL}${RouteName.PUBLIC_LOGIN}`} onClick={(evt) => {
                                evt.preventDefault();
                                handleClick(RouteName.PUBLIC_LOGIN);
                            }} variant="body2">
                                {t('Already have an account? Login')}
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <Link href={`${RouteName.PUBLIC_URL}${RouteName.MAIN}`} onClick={(evt) => {
                                evt.preventDefault();
                                handleClick(RouteName.MAIN);
                            }} variant="body2">
                                {t('Go to the main page')}
                            </Link>
                        </Grid>
                    </Grid>

                </form>
            </div>
        </Container>
  );
};

export default SignUp;
