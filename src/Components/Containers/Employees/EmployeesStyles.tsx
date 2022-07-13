import styled from "styled-components";

export const EmployeesContainer = styled.div`
  min-height: 34rem;
  padding: 0 2rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

export const AddEmploye = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AddEmployeeLink = styled.div`
display: flex;
  cursor: pointer;
  align-items: center;
`


export const EmployeesList = styled.div`
  min-height: 32rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media(max-width: 610px) {
    justify-content: center;
  }
`

export const PaginationContainer = styled.div`
  align-self: center;
  justify-self: flex-end;
`;