import styled from 'styled-components';

export const TableContainer = styled.div`
  max-width: 46rem;
  padding-top: 3rem;
  margin-bottom: 1rem;
  margin: 0 auto;
  @media (min-width: 1280px) {
    max-width: 28rem;
  }
`;

export const Table = styled.table`
  font-size: 0.85rem;
  text-align: left;
  border-radius: 0.25rem 0.25rem 0 0;
  border-collapse: separate;
  border-spacing: 8px;
  table-layout: fixed;
`;

export const TableThead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  width: 50%;
`;

export const TableTh = styled.th`
  color: rgba(0, 0, 0, 0.85);
  display: table-cell;
  font-weight: 500;
  font-size: 1rem;
  text-align: left;
  transition: background 0.3s ease;
  padding: 0.25rem;
  width: 25%;
  &:first-child {
    width: 3%;
  }
`;

export const TableTr = styled.tr`
  display: table-row;
  position: relative;
  vertical-align: middle;
  transition: background 0.3s ease;
`;

export const TableTd = styled.td`
  padding: 0.5rem;
  color: rgba(0, 0, 0, 0.65);
  &:first-child {
    border-radius: 0.25rem;
    width: 3%;
  }
`;
