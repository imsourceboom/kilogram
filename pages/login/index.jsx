import { useState, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import TelegramLoginButton from "react-telegram-login";
import { Container, Wrap, Title } from "./styled.js";

export default () => {
  // const [username, setUsername] = useState("");

  // const onChangeUserName = useCallback(e => {
  //   setUsername(e.target.value);
  // });

  const telegramResponse = response => {
    console.log(response);
  };

  return (
    <>
      <Head>
        <title>KILOGRAM - login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {/* <Title>KILOGRAM</Title>
        <Wrap>
          <form action="">
            <input
              type="text"
              value={username}
              onChange={onChangeUserName}
              placeholder="TELEGRAM USERNAME"
            />
            <Link href="/">
              <a>
                <div className="button">LOG IN</div>
              </a>
            </Link>
          </form>
        </Wrap> */}
        <TelegramLoginButton
          dataOnauth={telegramResponse}
          botName="KiloTonBot"
        />
      </Container>
    </>
  );
};
