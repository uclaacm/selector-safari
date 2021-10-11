import { sticker_names } from '../../constants/constants';

// check that all zebra colors are different
const checkZebras = (zebraColors) => (new Set(zebraColors)).size === zebraColors.length;

// check that all leopard colors are the same as the background
const checkLeopards = (leopardColors, backgroundColor) => leopardColors.every((e) => e === backgroundColor)

// check that all plant colors are rgb(48, 98, 48)
const checkPlants = (plantColors) => plantColors.every((e) => e === "rgb(48, 98, 48)")

const check = (boardEl, setStickerStyles, backgroundColor) => {
  let stickerStyles = {};
  let zebraColors = []; //for plant colors test to work an element will need to be added to this array
  let leopardColors = [];
  let plantColors = [];

  let stickerNodes = Array.from(boardEl.children);
  while (stickerNodes.length > 0) {
    let curNode = stickerNodes.shift();
    let stickerColor = window.getComputedStyle(curNode).getPropertyValue('color');
    if (curNode.tagName === "ZEBRA") {
      zebraColors.push(stickerColor);
    }
    else if (curNode.tagName === "LEOPARD") {
      leopardColors.push(stickerColor);
    }
    else if (curNode.className === "plant"){
      plantColors.push(stickerColor);
    }
    stickerStyles[curNode.id] = stickerColor;
    setStickerStyles(stickerStyles);
    if (curNode.id === "zed") console.log(`zed: ${stickerColor}`)

    Array.from(curNode.children).forEach((child) => {
      // ignore elements that aren't stickers (e.g. <svg>)
      if (sticker_names.includes(child.tagName.toLowerCase())) {
        stickerNodes.push(child);
      }
    });
  }
  return checkZebras(zebraColors) && checkLeopards(leopardColors, backgroundColor) && checkPlants(plantColors);
}

export default check;