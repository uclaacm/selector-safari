export const minLevel = 1;
export const maxLevel = 5;
export const sticker_names = ["zebra", "leopard", "acacia", "boabab", "elephantgrass"];
export const checks = [
    // all zebra colors are different
    {
        type: "tagName",
        value: "ZEBRA",
        check: (zebraColors, _) => (new Set(zebraColors)).size === zebraColors.length
    },
    // all leopard colors are the same as the background
    {
        type: "tagName",
        value: "LEOPARD",
        check: (leopardColors, backgroundColor) => leopardColors.every((e) => e === backgroundColor)
    },
    // all plant colors are rgb(48, 98, 48)
    {
        type: "className",
        value: "plant",
        check: (plantColors, _) => plantColors.every((e) => e === "rgb(48, 98, 48)")
    }
];