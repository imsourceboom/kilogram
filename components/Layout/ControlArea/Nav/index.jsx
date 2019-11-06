import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Nav, Wrap } from './styled';
import {
  userArticleAction,
  phoneArticleAction,
  kiloArticleAction,
  settingsArticleAction,
} from '../../../../reducers/nav';

const icons = ['user', 'phone', 'kilo', 'settings'];

const Menu = () => {
  const dispatch = useDispatch();

  const changeArticle = useCallback((e) => {
    if (e.currentTarget.id === 'user') {
      dispatch(userArticleAction);
    }
    if (e.currentTarget.id === 'phone') {
      dispatch(phoneArticleAction);
    }
    if (e.currentTarget.id === 'kilo') {
      dispatch(kiloArticleAction);
    }
    if (e.currentTarget.id === 'settings') {
      dispatch(settingsArticleAction);
    }
  }, []);

  return (
    <Wrap>
      {icons.map((v, i) => (
        <li id={v} key={i} onClick={changeArticle}>
          <Link href={v}>
            <a>
              <img src={`${v}.svg`} alt={v} />
            </a>
          </Link>
        </li>
      ))}
    </Wrap>
  );
};

export default () => (
  <Nav>
    <Menu />
  </Nav>
);
