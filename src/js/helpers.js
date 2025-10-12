import iziToast from 'izitoast';

export function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

export function showInfoToast(message) {
  iziToast.info({
    position: 'topRight',
    message: message,
  });
}

export function showSuccessToast(message) {
  iziToast.success({
    position: 'topRight',
    message: message,
  });
}
