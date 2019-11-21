import { BASE_FONT_SIZE } from './constants';

function rem(pixels: number, baseFontSize: number = BASE_FONT_SIZE): string | 0 {
  if (!pixels) {
    return 0;
  }

  return `${pixels / baseFontSize}rem`;
}

export default rem;
