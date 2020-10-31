import styled from 'styled-components';

export const EventsWrapper = styled.div`
  box-shadow: ${props => props.theme.shadowApp};
`;

export const HeadEvent = styled.div`
  background-color: ${props => props.theme.colors.eventHead};
  display: flex;
  color: ${props => props.theme.colors.eventHeadText};
  font-size: ${props =>props.theme.fontSizes.medium};
  font-weight: bold;
  width: 100%;
`;

export const DateEvent = styled.div`
  display: inline-block;
  padding: 10px;
`;

export const BackButton = styled.div`
  background-color: ${props => props.theme.colors.eventBackBtn};
  display: inline-block;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const InputEvent = styled.input`
  display: block;
  border: 1px solid ${props => props.theme.colors.inputBorder};
  padding: 10px;
  width: 100%;
`;

export const ListEvents = styled.ul`
  display: block;
  width: 100%;
`;

export const ItemEvent = styled.li`
  background-color: ${props => props.theme.colors.event};
  border-bottom: 1px solid ${props => props.theme.colors.tableBorder};
  color: ${props => props.theme.colors.eventText};
  font-size: ${props =>props.theme.fontSizes.small};
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
  box-shadow: 0px 6px 5px 1px rgb(229 152 155 / 0);
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 6px 5px 1px rgb(229 152 155 / 0.7);
    z-index: 31;
  }
`;

export const CloseEvent = styled.div`
  transition: all 150ms ease-in-out;
  transform: rotate(0);
  img {
    display: block;
    width: 15px;
  }
  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

export const Info = styled.div`
  color: #afafaf;
  font-size: 10px;
  padding-top: 10px;
  text-align: center;
`;
