import styled from 'styled-components';

export const Container = styled.div`

  input {
    width: 100%;
    height: 4rem;
    background: #fff;
    border: 1px solid #d7d7d7;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    font-weight: 400;
    font-size: 1rem;
    margin: 0.25rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 2rem;
    }
  }

`;
