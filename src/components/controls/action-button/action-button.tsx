import * as React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './action-button.styles';

interface Props {
    color: string;
    children: React.ReactNode;
    onClick: () => void;
}

const ActionButton: React.FunctionComponent<Props> = (props: Props) => {
  const { color, children, onClick } = props;
  const classes = useStyles();

  return (
        <Button
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}>
            {children}
        </Button>
  );
};

export default ActionButton;
