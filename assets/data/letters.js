const letters = {
  Backquote: {
    key: '`', keyShift: '~', keyRu: 'ё', keyRuShift: 'Ё',
  },
  Digit1: {
    key: '1', keyShift: '!', keyRu: '1', keyRuShift: '!',
  },
  Digit2: {
    key: '2', keyShift: '@', keyRu: '2', keyRuShift: '"',
  },
  Digit3: {
    key: '3', keyShift: '#', keyRu: '3', keyRuShift: '№',
  },
  Digit4: {
    key: '4', keyShift: '$', keyRu: '4', keyRuShift: ';',
  },
  Digit5: {
    key: '5', keyShift: '%', keyRu: '5', keyRuShift: '%',
  },
  Digit6: {
    key: '6', keyShift: '%', keyRu: '6', keyRuShift: '%',
  },
  Digit7: {
    key: '7', keyShift: '&', keyRu: '7', keyRuShift: '?',
  },
  Digit8: {
    key: '8', keyShift: '*', keyRu: '8', keyRuShift: '*',
  },
  Digit9: {
    key: '9', keyShift: '(', keyRu: '9', keyRuShift: '(',
  },
  Digit0: {
    key: '0', keyShift: ')', keyRu: '0', keyRuShift: ')',
  },
  Minus: {
    key: '-', keyShift: '_', keyRu: '-', keyRuShift: '_',
  },
  Equal: {
    key: '=', keyShift: '+', keyRu: '=', keyRuShift: '+',
  },
  Backspace: {
    key: 'Backspace', keyShift: 'Backspace', keyRu: 'Backspace', keyRuShift: 'Backspace',
  },
  Tab: {
    key: 'Tab', keyShift: 'Tab', keyRu: 'Tab', keyRuShift: 'Tab',
  },
  KeyQ: {
    key: 'q', keyShift: 'Q', keyRu: 'й', keyRuShift: 'Й',
  },
  KeyW: {
    key: 'w', keyShift: 'W', keyRu: 'ц', keyRuShift: 'Ц',
  },
  KeyE: {
    key: 'e', keyShift: 'E', keyRu: 'у', keyRuShift: 'У',
  },
  KeyR: {
    key: 'r', keyShift: 'R', keyRu: 'к', keyRuShift: 'К',
  },
  KeyT: {
    key: 't', keyShift: 'T', keyRu: 'е', keyRuShift: 'Е',
  },
  KeyY: {
    key: 'y', keyShift: 'Y', keyRu: 'н', keyRuShift: 'Н',
  },
  KeyU: {
    key: 'u', keyShift: 'U', keyRu: 'г', keyRuShift: 'Г',
  },
  KeyI: {
    key: 'i', keyShift: 'I', keyRu: 'ш', keyRuShift: 'Ш',
  },
  KeyO: {
    key: 'o', keyShift: 'O', keyRu: 'щ', keyRuShift: 'Щ',
  },
  KeyP: {
    key: 'p', keyShift: 'P', keyRu: 'з', keyRuShift: 'З',
  },
  BracketLeft: {
    key: '[', keyShift: '{', keyRu: 'х', keyRuShift: 'Х',
  },
  BracketRight: {
    key: ']', keyShift: '}', keyRu: 'ъ', keyRuShift: 'Ъ',
  },
  Backslash: {
    key: '\\', keyShift: '|', keyRu: '\\', keyRuShift: '/',
  },
  Delete: {
    key: 'Del', keyShift: 'Del', keyRu: 'Del', keyRuShift: 'Del',
  },
  CapsLock: {
    key: 'CapsLock', keyShift: 'CapsLock', keyRu: 'CapsLock', keyRuShift: 'CapsLock',
  },
  KeyA: {
    key: 'a', keyShift: 'A', keyRu: 'ф', keyRuShift: 'Ф',
  },
  KeyS: {
    key: 's', keyShift: 'S', keyRu: 'ы', keyRuShift: 'Ы',
  },
  KeyD: {
    key: 'd', keyShift: 'D', keyRu: 'в', keyRuShift: 'В',
  },
  KeyF: {
    key: 'f', keyShift: 'F', keyRu: 'а', keyRuShift: 'А',
  },
  KeyG: {
    key: 'g', keyShift: 'G', keyRu: 'п', keyRuShift: 'П',
  },
  KeyH: {
    key: 'h', keyShift: 'H', keyRu: 'р', keyRuShift: 'Р',
  },
  KeyJ: {
    key: 'j', keyShift: 'J', keyRu: 'о', keyRuShift: 'О',
  },
  KeyK: {
    key: 'k', keyShift: 'K', keyRu: 'л', keyRuShift: 'Л',
  },
  KeyL: {
    key: 'l', keyShift: 'L', keyRu: 'д', keyRuShift: 'Д',
  },
  Semicolon: {
    key: ';', keyShift: ':', keyRu: 'ж', keyRuShift: 'Ж',
  },
  Quote: {
    key: '\'', keyShift: '"', keyRu: 'э', keyRuShift: 'Э',
  },
  Enter: {
    key: 'Enter', keyShift: 'Enter', keyRu: 'Enter', keyRuShift: 'Enter',
  },
  ShiftLeft: {
    key: 'Shift', keyShift: 'Shift', keyRu: 'Shift', keyRuShift: 'Shift',
  },
  KeyZ: {
    key: 'z', keyShift: 'Z', keyRu: 'я', keyRuShift: 'Я',
  },
  KeyX: {
    key: 'x', keyShift: 'X', keyRu: 'ч', keyRuShift: 'Ч',
  },
  KeyC: {
    key: 'c', keyShift: 'C', keyRu: 'с', keyRuShift: 'С',
  },
  KeyV: {
    key: 'v', keyShift: 'V', keyRu: 'м', keyRuShift: 'М',
  },
  KeyB: {
    key: 'b', keyShift: 'B', keyRu: 'и', keyRuShift: 'И',
  },
  KeyN: {
    key: 'n', keyShift: 'N', keyRu: 'т', keyRuShift: 'Т',
  },
  KeyM: {
    key: 'm', keyShift: 'M', keyRu: 'ь', keyRuShift: 'Ь',
  },
  Comma: {
    key: ',', keyShift: '<', keyRu: 'б', keyRuShift: 'Б',
  },
  Period: {
    key: '.', keyShift: '>', keyRu: 'ю', keyRuShift: 'Ю',
  },
  Slash: {
    key: '/', keyShift: '?', keyRu: '.', keyRuShift: ',',
  },
  ArrowUp: {
    key: '⇧', keyShift: '⇧', keyRu: '⇧', keyRuShift: '⇧',
  },
  ShiftRight: {
    key: 'Shift', keyShift: 'Shift', keyRu: 'Shift', keyRuShift: 'Shift',
  },
  ControlLeft: {
    key: 'Ctrl', keyShift: 'Ctrl', keyRu: 'Ctrl', keyRuShift: 'Ctrl',
  },
  MetaLeft: {
    key: 'Win', keyShift: 'Win', keyRu: 'Win', keyRuShift: 'Win',
  },
  AltLeft: {
    key: 'Alt', keyShift: 'Alt', keyRu: 'Alt', keyRuShift: 'Alt',
  },
  Space: {
    key: ' ', keyShift: ' ', keyRu: ' ', keyRuShift: ' ',
  },
  AltRight: {
    key: 'Alt', keyShift: 'Alt', keyRu: 'Alt', keyRuShift: 'Alt',
  },
  ArrowLeft: {
    key: '⇦', keyShift: '⇦', keyRu: '⇦', keyRuShift: '⇦',
  },
  ArrowDown: {
    key: '⇩', keyShift: '⇩', keyRu: '⇩', keyRuShift: '⇩',
  },
  ArrowRight: {
    key: '⇨', keyShift: '⇨', keyRu: '⇨', keyRuShift: '⇨',
  },
  ControlRight: {
    key: 'Ctrl', keyShift: 'Ctrl', keyRu: 'Ctrl', keyRuShift: 'Ctrl',
  },
};
export default letters;
