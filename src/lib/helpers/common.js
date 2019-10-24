/* eslint-disable prefer-rest-params */
export function debounce(fn, interval) {
  let timer;
  return function debounced() {
    clearTimeout(timer);
    const args = arguments;
    const that = this;
    timer = setTimeout(function callOriginalFn() {
      fn.apply(that, args);
    }, interval);
  };
}

export const getImgUrl = imgArr =>
  typeof imgArr[0] === 'object' && imgArr[0].id
    ? `https://images.jqestate.ru/${imgArr[0].id}-thumbnail-512`
    : 'https://via.placeholder.com/769x512?text=Нет+фото';
