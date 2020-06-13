import React from 'react';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <Container>
      <HelloImage />
      <Text>
        Example from&nbsp;
        <Link
          href="https://github.com/junhoyeo/nextjs-typescript-boilerplate"
          target="_blank"
        >
          junhoyeo/nextjs-typescript-boilerplate
        </Link>
      </Text>
    </Container>
  );
};

export default Home;

const HelloImage = styled.img.attrs({
  src: `/static/images/hello.png`,
})`
  width: 312px;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Text = styled.span`
  color: white;
  font-weight: 300;
  font-size: 1.8rem;
`;

const Link = styled.a`
  color: white;
  text-decoration: underline;
`;
