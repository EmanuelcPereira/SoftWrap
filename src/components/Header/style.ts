import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1920px;
  margin: 0 auto;

  padding: 2rem 4rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
