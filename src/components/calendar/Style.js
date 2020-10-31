import styled from 'styled-components';

export const TableContent = styled.div`
  background: ${props => props.theme.colors.table};
  box-shadow: ${props => props.theme.shadowApp};
`;

export const Row = styled.div`
  display: flex;
  background: ${props => props.isHead ? props.theme.colors.rowHead : props.theme.colors.row};
  width: 100%;
`;

export const Cell = styled.div`
  background-color: ${props => {
    const { theme } = props;
    if(props.isCurrentDate) return theme.colors.cellActive;
    else if(props.notEmpty) return theme.colors.cell;
    return theme.colors.cellEmpty;
  }};
  border: 1px solid ${props => props.theme.colors.tableBorder};
  box-shadow: 0px 0px 3px 2px rgb(229 152 155 / 0);
  color: ${props => !props.isCurrentDate ? props.theme.colors.cellText : props.theme.colors.cellTextActive};
  font-size: ${props =>props.theme.fontSizes.medium};
  font-weight: bold;
  text-align: center;
  flex: 1;
  margin: 0;
  padding: 1em;
  position: relative;
  z-index: 1;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #e5989b;
    box-shadow: 0px 0px 3px 2px rgb(229 152 155 / 0.7);
    cursor: pointer;
    z-index: 2;
  }
`;

export const Counter = styled.div`
  background-color: ${props => props.theme.colors.counter};
  box-shadow: 1px 1px 2px 0px rgb(0 0 0 / 0.3);
  color: ${props => props.theme.colors.counterColor};
  border-radius: 50%;
  font-size: 10px;
  position: absolute;
  left: calc(50% + 17px);
  top: calc(50% - 12px);
  transform: translate3d(-50%, -50%, 0);
  padding: 5px;
  width: 20px;
`;

export const NavigationList = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  padding-top: 5px;
`;

export const NavigationItem = styled.div`
  text-align: center;
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const NavigationText = styled.div`
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;
