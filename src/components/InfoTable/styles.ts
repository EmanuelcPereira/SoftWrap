import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-title);
      font-weight: 400;
      padding: 1rem 4rem;
      text-align: center;
      line-height: 1rem;
    }

    td {
      text-align: center;
      padding: 1rem 1rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &::first-child {
        color: var(--text-title);
      }
    }

    button {
      background: #fff;
      padding: 1rem;
      border-radius: 8px;
      border: none;
      transition: 0.1s;

      svg {
        font-size: 1rem;
        color: var(--text-body);
      }
    }
  }
`;