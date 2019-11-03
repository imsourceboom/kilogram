import { WholeWrapper, ContentsArea } from './styled';
import ControlArea from './ControlArea';

export default ({ children }) => (
  <WholeWrapper>
    <ControlArea />
    <ContentsArea>{children}</ContentsArea>
  </WholeWrapper>
);
