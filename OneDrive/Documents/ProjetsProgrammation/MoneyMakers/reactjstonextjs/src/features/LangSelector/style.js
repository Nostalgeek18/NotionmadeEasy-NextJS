import styled from 'styled-components';

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.375rem 0.75rem;

  &:after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .750em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
  }

  &:focus {
    box-shadow: 0 0 0 .25rem;
  }
`;

export const Flag = styled.img`
  max-width: 32px;
  max-height: 32px;
  overflow: hidden;
`;

export const DropdownMenu = styled.ul`
  display: ${({$isOpen}) => $isOpen ? 'block' : 'none'};
  position: absolute;
  inset: 0px auto auto 0px;
  margin: 0px;
  transform: translate3d(-8px, 33px, 0px);
  background-color: var(--color-grey-0);
  min-width: 10rem;
  padding: 0 0.5rem;
  border: 1px solid rgba(0,0,0, 0.175);
  border-radius: 0.375rem;

`;


export const DropdownItem = styled.button`
  display: block;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 400;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    color: #212529;
    background-color: #f8f9fa;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: none;
  }

`;

export const FlagIcon = styled.span`
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    position: relative;
    display: inline-block;
    width: 1.333em;
    height: 1em;
    line-height: 1em;
    /* opacity: ${({ opacity }) => opacity}; */
    opacity: 1;
    background-image: ${({src}) => `url(${src})`};
    margin-right: .5rem !important;
    margin-left: .5rem !important;

    &::before {
        content: '\00a0',
        background-color 0.3s ease 0s, border 0.3s ease 0s;
    }
`;
