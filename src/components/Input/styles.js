import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  > label {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    gap: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400}
  }
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0.875rem;
  background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
  border-radius: 0.5rem;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  }
  
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  }
  
  > input {
    width: 100%;
    font-family: 'Roboto';
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};
    }
  }
`;
