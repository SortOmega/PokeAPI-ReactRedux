import styled, { css } from 'styled-components';

export type PokeContainerProps = {
  styledProps?: {
    boxSize?: { width?: string; height?: string };
  };
};

export const PokeContainer = styled.li<PokeContainerProps>`
  ${({ styledProps }) => css`
    display: flex;
    gap: 5px;
    padding: 8px;
    border-radius: 8px;
    border: 3px solid var(--PokeBlue);
    background: var(--PokeBrown);

    @media screen and (min-width: 0px) and (max-width: 860px) {
      flex-direction: column;
    }

    > img {
      background: contain;
      @media screen and (min-width: 0px) and (max-width: 860px) {
        width: 70%;
      }
      @media screen and (min-width: 860px) {
        height: 90%;
      }
      align-self: center;
    }

    > .Pokemon__Info {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;

      > .PokeBox__NameID {
        width: 100%;
        display: grid;
        gap: 20px;
        grid-template-columns: 15% 1fr;

        > .PokeInfo {
          text-transform: capitalize;
          font-weight: bold;
          text-align: center;

          justify-self: center;
          word-break: break-word;
        }
        > .Pokemon__Info-name {
          justify-self: start;
        }
      }

      > .PokeBox__Types {
        display: flex;
        gap: 5px;
        height: 100%;
        align-items: center;
        justify-content: start;
      }
    }

    ${styledProps?.boxSize?.width &&
    css`
      width: ${styledProps?.boxSize?.width};
    `}
    ${styledProps?.boxSize?.height &&
    css`
      height: ${styledProps?.boxSize?.height};
    `}
  `}
`;
