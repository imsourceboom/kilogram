import { useState, useEffect } from 'react';
// import Link from 'next/link';
import { Wrap } from './styled';
import getApi from '../../../../../functions/getApi.js';

export default () => {
  const [dimension, setDimension] = useState();
  const [roomList, setRoomLists] = useState([]);

  useEffect(() => {
    getApi('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        setRoomLists(res.filter((data) => data.id < 21));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const targetRef = (node) => {
    if (node !== null) {
      const updateSize = () => {
        setDimension(node.getBoundingClientRect().width);
      };
      window.addEventListener('resize', updateSize);
      updateSize();
      window.removeEventListener('resize', updateSize);
    }
  };

  return (
    <Wrap>
      {roomList.map((r) => (
        <li key={r.id} ref={targetRef}>
          {/* <Link href=""> */}
          <figure>
            <img src={r.thumbnailUrl} alt="" />
          </figure>
          <article>
            <hgroup>
              <h4 style={{ width: `calc(${dimension}px - 150px)` }}>{r.title}</h4>
              <time>23:59 AM</time>
            </hgroup>
            <div>
              <summary />
              <span />
            </div>
          </article>
          {/* </Link> */}
        </li>
      ))}
    </Wrap>
  );
};
