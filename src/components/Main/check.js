import { sticker_names, checks } from '../../constants/constants';

const check = (boardEl, setStickerStyles, backgroundColor) => {
  let stickerStyles = {};
  let colorsToCheck = checks.map(() => []);
  // let zebraColors = []; //for plant colors test to work an element will need to be added to this array
  // let leopardColors = [];
  // let plantColors = [];

  let stickerNodes = Array.from(boardEl.children);
  while (stickerNodes.length > 0) {
    let curNode = stickerNodes.shift();
    let stickerColor = window.getComputedStyle(curNode).getPropertyValue('color');
    checks.forEach((e, i) => {
      if (curNode[e.type] === e.value) {
        colorsToCheck[i].push(stickerColor);
      }
    });
    // if (curNode.tagName === "ZEBRA") {
    //   zebraColors.push(stickerColor);
    // }
    // else if (curNode.tagName === "LEOPARD") {
    //   leopardColors.push(stickerColor);
    // }
    // else if (curNode.className === "plant"){
    //   plantColors.push(stickerColor);
    // }
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
  // checkZebras(zebraColors) && checkLeopards(leopardColors, backgroundColor) && checkPlants(plantColors);
}

export default check;