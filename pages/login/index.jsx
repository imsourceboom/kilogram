import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Container, Wrap, Title } from './styled.js';

export default () => {
  const [username, setUsername] = useState('');

  const onChangeUserName = useCallback((e) => {
    setUsername(e.target.value);
  });

  return (
    <Container>
      <Title>KILOGRAM</Title>
      <Wrap>
        <form action="">
          <input
            type="text"
            value={username}
            onChange={onChangeUserName}
            placeholder="TELEGRAM USERNAME"
          />
          {/* <input type="submit"/> */}
          <Link href="/">
            <a>
              <div className="button">LOG IN</div>
            </a>
          </Link>
        </form>
      </Wrap>
    </Container>
  );
};
