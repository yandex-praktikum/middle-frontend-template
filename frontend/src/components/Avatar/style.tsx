import styled, { css } from 'styled-components';
import defaultAvatar from '../../assets/img/default_avatar.png';
interface AvatarProps {
  size: number;
  editable?: boolean;
}

interface ImgProps {
  backgroundImage: string | undefined;
}

export const AvatarSt = styled.div.attrs((props: AvatarProps) => ({
  size: props.size,
  role: 'button',
  editable: props.editable,
}))`
  background-color: ${({ theme }) => theme.allColors.grey};
  border-radius: 50%;
  cursor:  ${({ editable }) => (editable ? 'pointer' : 'initial')};
  position: relative;
  width: ${({ size }) => (size ? `${size}px` : '130px')};
  min-width: ${({ size }) => (size ? `${size}px` : '130px')};
  height: ${({ size }) => (size ? `${size}px` : '130px')};

  ${({ editable }) =>
    editable &&
    css`
      ::after {
        position: absolute;
        top: 0px;
        content: 'Поменять аватар';
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.allColors.black};
        opacity: 0;
        color: ${({ theme }) => theme.allColors.white};
        font-size: 13px;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: opacity ${({ theme }) => theme.skillsStartAnim};
      }

      &:hover {
        &::after {
          opacity: 0.4;
        }
      }
    `}
`;

export const AvatarImgSt = styled.img.attrs((props: ImgProps) => ({
  src: props.backgroundImage
    ? `https://ya-praktikum.tech/api/v2/resources${props.backgroundImage}`
    :  defaultAvatar,
}))<ImgProps>`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;
