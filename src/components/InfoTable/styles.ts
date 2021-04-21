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
      padding: 1rem 5rem;
      text-align: center;
      line-height: 1rem;
    }

    td {
      text-align: center;
      padding: 1rem 5rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &::first-child {
        color: var(--text-title);
      }
    }
  }
`;
