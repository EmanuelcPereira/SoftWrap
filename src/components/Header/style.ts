import styled from 'styled-components';

export const Container = styled.header`
  background: var(--background);
  hr {
    margin: 0 4rem;
    padding: 0.01rem 4rem 0.25rem;
  }
`;

export const Content = styled.div`
  max-width: 1920px;
  margin: 0 auto;

  padding: 1rem 4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 507px;
  }

  button {
    background: var(--blue-light);
    border-radius: 0.25rem;
    border: 1px solid var(--blue-light);
    padding: 0 2rem;
    font-size: 1rem;
    color: #fff;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:focus {
      outline: none;
    }
  }
`;
