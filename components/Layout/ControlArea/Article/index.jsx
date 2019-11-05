import { useSelector } from 'react-redux';
import { Wrap } from './styled';
import Kilo from './Kilo';

export default () => {
  const { userArticle, phoneArticle, kiloArticle, settingsArticle } = useSelector(
    (state) => state.nav,
  );

  return (
    <Wrap>
      {userArticle && <div>user</div>}
      {phoneArticle && <div>phone</div>}
      {kiloArticle && <Kilo />}
      {settingsArticle && <div>settings</div>}
    </Wrap>
  );
};
