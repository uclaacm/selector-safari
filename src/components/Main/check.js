import { sticker_names, checks } from '../../constants/constants';

const check = (boardEl, setStickerStyles, backgroundColor) => {
  let stickerStyles = {};
  let colorsToCheck = checks.map(() => []);

  let stickerNodes = Array.from(boardEl.children);
  while (stickerNodes.length > 0) {
    let curNode = stickerNodes.shift();
    let stickerColor = window.getComputedStyle(curNode).getPropertyValue('color');
    checks.forEach((e, i) => {
      if (curNode[e.type] === e.value) {
        colorsToCheck[i].push(stickerColor);
      }
    });
    stickerStyles[curNode.id] = stickerColor;
    setStickerStyles(stickerStyles);

    Array.from(curNode.children).forEach((child) => {
      // ignore elements that aren't stickers (e.g. <svg>)
      if (sticker_names.includes(child.tagName.toLowerCase())) {
        stickerNodes.push(child);
      }
    });
  }
  return colorsToCheck.every((colors, i) => checks[i].check(colors, backgroundColor));
}

export default check;