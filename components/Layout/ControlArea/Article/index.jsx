import { useSelector } from 'react-redux';
import { Wrap } from './styled';
import Briefcase from './Briefcase';

export default () => {
  const { userArticle, phoneArticle, briefcaseArticle, settingsArticle } = useSelector(
    (state) => state.nav,
  );

  return (
    <Wrap>
      {userArticle && <div>user</div>}
      {phoneArticle && <div>phone</div>}
      {briefcaseArticle && <Briefcase />}
      {settingsArticle && <div>settings</div>}
    </Wrap>
  );
};
