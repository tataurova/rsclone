import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useTranslation } from 'react-i18next';
import useStyles from './copyright.styles';
import AccountGithub from '../account-github/account-github';

const Copyright = () => {
  const style = useStyles();
  const { t } = useTranslation();

  return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'© '}
            <Link className={style.linkFont} color="inherit" href="https://rs.school/js/" target="_blank">
                RS School
            </Link>{' '}
            <span className={style.flex}>
          <AccountGithub author={t('Olga Tataurova')} address='https://github.com/tataurova/'/>
          <AccountGithub author={t('Leonid Shuliak')} address='https://github.com/shuliakleonid/'/>
          <AccountGithub author={t('Andrei Podyslenkau')} address='https://github.com/andreizayaz'/>
        </span>
            {'2021'}
        </Typography>
  );
};

export default Copyright;
