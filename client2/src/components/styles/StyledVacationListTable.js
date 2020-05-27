import styled from 'styled-components';

export const StyledVacationListTable = styled.table`
  width: auto;
  border-collapse: collapse;
  
  tr, th, td {
    margin: 0;
    border: none;
  }

  th {
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  td, th {
    padding: 5px 10px;
    border-right: 1px solid #ddd;
  }

  td:last-child,
  th:last-child {
    border-right: none;
  }
`;