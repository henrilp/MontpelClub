import { Color } from '~/assets/theme/color/color'

const getRandomColor = () => {
  const n = (Math.random() * 0xfffff * 1000000).toString(16)
  return '#' + n.slice(0, 6)
}
// first basic colors for borders of orders
const BORDER_COLOR_ARRAY = [Color.orange, Color.green, Color.purple]
/**
 * The idea here is find a new color for border of order in OrdersLite view
 * The color must not exist in "differentFromArray" and prioritize BORDER_COLOR_ARRAY colors ("beautiful" colors) */
export function getNewColor(differentFromArray: Array<string>) {
  let i = 0
  let color = BORDER_COLOR_ARRAY[0]
  while (differentFromArray.includes(color)) {
    if (i < BORDER_COLOR_ARRAY.length - 1) {
      i++
      color = BORDER_COLOR_ARRAY[i]
    } else {
      color = getRandomColor()
    }
  }
  return color
}
