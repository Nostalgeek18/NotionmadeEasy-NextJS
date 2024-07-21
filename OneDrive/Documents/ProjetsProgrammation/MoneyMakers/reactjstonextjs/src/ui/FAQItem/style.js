import styled from "styled-components";


export const AccordionItem = styled.div`
  background-color: var(--color-grey-100);
  border: ${({isOpen})=> isOpen ? '1px solid var(--color-dark-100)' : '1px solid var(--color-grey-300)'};
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
  max-width: 1000px;
  min-width: 800px;

  @media (max-width: 768px) {
      min-width: 160px;
  }
`;

export const AccordionItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  color: var(--color-dark-100);
  font-size: 20px;
`;

export const AccordionItemHeaderTitle = styled.span`
  font-weight: 600;
`;

export const AccordionItemHeaderIcon = styled.svg`
  transition: all 0.2s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-180deg)' : 'rotate(0)')};
`;

export const AccordionItemDescriptionWrapper = styled.div`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  overflow: hidden;
  transition: all 0.2s ease;
`;

export const AccordionItemDescription = styled.div`
  min-height: 0;
`;

export const AccordionItemDescriptionText = styled.p`
  padding: 10px;
  line-height: 1.5;
  font-weight: 500;
  font-size: 1.6rem;
  color: var(--color-grey-700);
  font-family: "Inter", sans-serif;
`;

export const AccordionItemDescriptionHr = styled.hr`
  border: none;
  border-top: 1px solid var(--border-color);
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
`;