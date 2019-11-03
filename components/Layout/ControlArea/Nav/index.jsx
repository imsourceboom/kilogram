import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Nav, Wrap } from './styled';
import { userAction, phoneAction, briefcaseAction, settingsAction } from '../../../../reducers/nav';

const icons = ['user', 'phone', 'briefcase', 'settings'];

const Menu = () => {
  const dispatch = useDispatch();

  const changeArticle = useCallback((e) => {
    if (e.currentTarget.id === 'user') {
      dispatch(userAction);
    }
    if (e.currentTarget.id === 'phone') {
      dispatch(phoneAction);
    }
    if (e.currentTarget.id === 'briefcase') {
      dispatch(briefcaseAction);
    }
    if (e.currentTarget.id === 'settings') {
      dispatch(settingsAction);
    }
  });

  return (
    <Wrap>
      {icons.map((v, i) => (
        <li id={v} key={i} onClick={changeArticle}>
          <img src={`${v}.svg`} alt={v} />
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
