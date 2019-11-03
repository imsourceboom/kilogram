import { useState } from 'react';
import { Wrap, Label, Input, Placeholder } from './styled';

export default () => {
  const [searching, setSearching] = useState('');

  const onChangeSearching = (e) => {
    setSearching(e.target.value);
    if (e.target.focusout) {
      setSearching('');
    }
  };

  return (
    <Wrap>
      <form method="get" action="">
        <Label>
          <Input name="search" type="text" value={searching} onChange={onChangeSearching} />
          <Placeholder>
            <img src="/search.svg" alt="" />
            <figcaption>{!`${searching}` && 'Search'}</figcaption>
          </Placeholder>
        </Label>
      </form>
    </Wrap>
  );
};
