import * as React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: 'none',
  },
}));

interface Props {
  type?: 'button' | 'reset' | 'submit';
  text?: string;
  size?: 'large' | 'medium' | 'small';
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  variant?: 'contained' | 'outlined' | 'text';
  onClick?: () => void;
  startIcon?: React.ReactNode;
  className?: string;
}

const Button: React.FunctionComponent<Props> = (props: Props) => {
  const {
    text, size, color, variant, onClick, ...other
  } = props;
  const classes = useStyles();

  return (
        <MuiButton
            variant={variant || 'contained'}
            size={size || 'large'}
            color={color || 'primary'}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            {text}
        </MuiButton>
  );
};

export default Button;
