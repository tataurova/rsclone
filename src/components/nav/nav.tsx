import * as React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FaceIcon from '@material-ui/icons/Face';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import ArchiveIcon from '@material-ui/icons/Archive';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import LanguageIcon from '@material-ui/icons/Language';
import { useTranslation } from 'react-i18next';
import { RouteName, PageName, MenuItemText } from '../../const';
import NameSpace from '../../reducer/name-space';
import { ActionCreator } from '../../reducer/app/app';
import useStyles from './nav.styles';
import i18n from '../../i18n';

interface Props {
    onMenuClick: (arg: string) => void;
    page: string;
}

const changeLanguage = (lang) => {
  localStorage.setItem('language', lang);
  i18n.changeLanguage(lang);
};

const Nav: React.FunctionComponent<Props> = ({ onMenuClick, page }: Props) => {
  const history = useHistory();

  function handleClick(route) {
    history.push(route);
  }
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const { t } = useTranslation();

  return (<div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer('left', false)}
            onKeyDown={toggleDrawer('left', false)}
        >
            <Divider />
            <List>
                <ListItem
                    button
                    onClick={() => { handleClick(RouteName.MAIN); onMenuClick(PageName.MAIN); }}
                    className={page === PageName.MAIN ? classes.active : ''}
                >
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary={t(MenuItemText.MAIN)} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => { handleClick(RouteName.GONE); onMenuClick(PageName.GONE); }}
                    className={page === PageName.GONE ? classes.active : ''}
                >
                    <ListItemIcon><FaceIcon/></ListItemIcon>
                    <ListItemText primary={t(MenuItemText.GONE)} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => { handleClick(RouteName.LOOKING_RELATIVES); onMenuClick(PageName.LOOKING_RELATIVES); }}
                    className={page === PageName.LOOKING_RELATIVES ? classes.active : ''}
                >
                    <ListItemIcon><EmojiPeopleIcon/></ListItemIcon>
                    <ListItemText primary={t(MenuItemText.LOOKING_RELATIVES)} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => { handleClick(RouteName.ACTIVE_SEARCHES); onMenuClick(PageName.ACTIVE_SEARCHES); }}
                    className={page === PageName.ACTIVE_SEARCHES ? classes.active : ''}
                >
                    <ListItemIcon><PriorityHighIcon/></ListItemIcon>
                    <ListItemText primary={t(MenuItemText.ACTIVE_SEARCHES)} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => { handleClick(RouteName.CLOSED_SEARCHES); onMenuClick(PageName.CLOSED_SEARCHES); }}
                    className={page === PageName.CLOSED_SEARCHES ? classes.active : ''}
                >
                    <ListItemIcon><ArchiveIcon/></ListItemIcon>
                <ListItemText primary={t(MenuItemText.CLOSED_SEARCHES)} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon><ShowChartIcon/></ListItemIcon>
                    <ListItemText primary={t(MenuItemText.STATISTICS)} />
                </ListItem>
                <ListItem button onClick={() => changeLanguage(localStorage.getItem('language') === 'en' ? 'ru' : 'en')}>
                    <ListItemIcon><LanguageIcon/></ListItemIcon>
                    <ListItemText primary={t(MenuItemText.LANGUAGE)} />
                </ListItem>
            </List>
        </div>
  );
};

export const mapStateToProps = (state) => ({
  page: state[NameSpace.APP].page,
});

export const mapDispatchToProps = (dispatch) => ({
  onMenuClick(page) {
    dispatch(ActionCreator.changePage(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
