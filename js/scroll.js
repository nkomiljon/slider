let i = 0;
let width = 0;
export function scroll(elWidth, count) {
  console.log(elWidth);
  console.log(count);
  console.log(i);
  width += elWidth;
  i++;
  if (i !== count) {
    return -1 * width;
  } else {
    i = 0;
    return 0;
  }
}
