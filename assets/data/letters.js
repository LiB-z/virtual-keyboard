const letters = {
  Backquote: {
    key: '`', keyShift: '~', keyRu: 'ё', keyRuShift: 'Ё', keyUP: '~', keyRuUP: 'Ё',
  },
  Digit1: {
    key: '1', keyShift: '!', keyRu: '1', keyRuShift: '!', keyUP: '1', keyRuUP: '1',
  },
  Digit2: {
    key: '2', keyShift: '@', keyRu: '2', keyRuShift: '"', keyUP: '2', keyRuUP: '2',
  },
  Digit3: {
    key: '3', keyShift: '#', keyRu: '3', keyRuShift: '№', keyUP: '3', keyRuUP: '3',
  },
  Digit4: {
    key: '4', keyShift: '$', keyRu: '4', keyRuShift: ';', keyUP: '4', keyRuUP: '4',
  },
  Digit5: {
    key: '5', keyShift: '%', keyRu: '5', keyRuShift: '%', keyUP: '5', keyRuUP: '5',
  },
  Digit6: {
    key: '6', keyShift: '%', keyRu: '6', keyRuShift: '%', keyUP: '6', keyRuUP: '6',
  },
  Digit7: {
    key: '7', keyShift: '&', keyRu: '7', keyRuShift: '?', keyUP: '7', keyRuUP: '7',
  },
  Digit8: {
    key: '8', keyShift: '*', keyRu: '8', keyRuShift: '*', keyUP: '8', keyRuUP: '8',
  },
  Digit9: {
    key: '9', keyShift: '(', keyRu: '9', keyRuShift: '(', keyUP: '9', keyRuUP: '9',
  },
  Digit0: {
    key: '0', keyShift: ')', keyRu: '0', keyRuShift: ')', keyUP: '0', keyRuUP: '0',
  },
  Minus: {
    key: '-', keyShift: '_', keyRu: '-', keyRuShift: '_', keyUP: '-', keyRuUP: '-',
  },
  Equal: {
    key: '=', keyShift: '+', keyRu: '=', keyRuShift: '+', keyUP: '=', keyRuUP: '=',
  },
  Backspace: {
    key: 'Backspace', keyShift: 'Backspace', keyRu: 'Backspace', keyRuShift: 'Backspace', keyUP: 'Backspace', keyRuUP: 'Backspace',
  },
  Tab: {
    key: 'Tab', keyShift: 'Tab', keyRu: 'Tab', keyRuShift: 'Tab', keyUP: 'Tab', keyRuUP: 'Tab',
  },
  KeyQ: {
    key: 'q', keyShift: 'Q', keyRu: 'й', keyRuShift: 'Й', keyUP: 'Q', keyRuUP: 'Й',
  },
  KeyW: {
    key: 'w', keyShift: 'W', keyRu: 'ц', keyRuShift: 'Ц', keyUP: 'W', keyRuUP: 'Ц',
  },
  KeyE: {
    key: 'e', keyShift: 'E', keyRu: 'у', keyRuShift: 'У', keyUP: 'E', keyRuUP: 'У',
  },
  KeyR: {
    key: 'r', keyShift: 'R', keyRu: 'к', keyRuShift: 'К', keyUP: 'R', keyRuUP: 'К',
  },
  KeyT: {
    key: 't', keyShift: 'T', keyRu: 'е', keyRuShift: 'Е', keyUP: 'T', keyRuUP: 'Е',
  },
  KeyY: {
    key: 'y', keyShift: 'Y', keyRu: 'н', keyRuShift: 'Н', keyUP: 'Y', keyRuUP: 'Н',
  },
  KeyU: {
    key: 'u', keyShift: 'U', keyRu: 'г', keyRuShift: 'Г', keyUP: 'U', keyRuUP: 'Г',
  },
  KeyI: {
    key: 'i', keyShift: 'I', keyRu: 'ш', keyRuShift: 'Ш', keyUP: 'I', keyRuUP: 'Ш',
  },
  KeyO: {
    key: 'o', keyShift: 'O', keyRu: 'щ', keyRuShift: 'Щ', keyUP: 'O', keyRuUP: 'Щ',
  },
  KeyP: {
    key: 'p', keyShift: 'P', keyRu: 'з', keyRuShift: 'З', keyUP: 'P', keyRuUP: 'З',
  },
  BracketLeft: {
    key: '[', keyShift: '{', keyRu: 'х', keyRuShift: 'Х', keyUP: '[', keyRuUP: 'Х',
  },
  BracketRight: {
    key: ']', keyShift: '}', keyRu: 'ъ', keyRuShift: 'Ъ', keyUP: ']', keyRuUP: 'Ъ',
  },
  Backslash: {
    key: '\\', keyShift: '|', keyRu: '\\', keyRuShift: '/', keyUP: '\\', keyRuUP: '\\',
  },
  Delete: {
    key: 'Del', keyShift: 'Del', keyRu: 'Del', keyRuShift: 'Del', keyUP: 'Del', keyRuUP: 'Del',
  },
  CapsLock: {
    key: 'CapsLock', keyShift: 'CapsLock', keyRu: 'CapsLock', keyRuShift: 'CapsLock', keyUP: 'CapsLock', keyRuUP: 'CapsLock',
  },
  KeyA: {
    key: 'a', keyShift: 'A', keyRu: 'ф', keyRuShift: 'Ф', keyUP: 'A', keyRuUP: 'Ф',
  },
  KeyS: {
    key: 's', keyShift: 'S', keyRu: 'ы', keyRuShift: 'Ы', keyUP: 'S', keyRuUP: 'Ы',
  },
  KeyD: {
    key: 'd', keyShift: 'D', keyRu: 'в', keyRuShift: 'В', keyUP: 'D', keyRuUP: 'В',
  },
  KeyF: {
    key: 'f', keyShift: 'F', keyRu: 'а', keyRuShift: 'А', keyUP: 'F', keyRuUP: 'А',
  },
  KeyG: {
    key: 'g', keyShift: 'G', keyRu: 'п', keyRuShift: 'П', keyUP: 'G', keyRuUP: 'П',
  },
  KeyH: {
    key: 'h', keyShift: 'H', keyRu: 'р', keyRuShift: 'Р', keyUP: 'H', keyRuUP: 'Р',
  },
  KeyJ: {
    key: 'j', keyShift: 'J', keyRu: 'о', keyRuShift: 'О', keyUP: 'J', keyRuUP: 'О',
  },
  KeyK: {
    key: 'k', keyShift: 'K', keyRu: 'л', keyRuShift: 'Л', keyUP: 'K', keyRuUP: 'Л',
  },
  KeyL: {
    key: 'l', keyShift: 'L', keyRu: 'д', keyRuShift: 'Д', keyUP: 'L', keyRuUP: 'Д',
  },
  Semicolon: {
    key: ';', keyShift: ':', keyRu: 'ж', keyRuShift: 'Ж', keyUP: ';', keyRuUP: 'Ж',
  },
  Quote: {
    key: '\'', keyShift: '"', keyRu: 'э', keyRuShift: 'Э', keyUP: '\'', keyRuUP: 'Э',
  },
  Enter: {
    key: 'Enter', keyShift: 'Enter', keyRu: 'Enter', keyRuShift: 'Enter', keyUP: 'Enter', keyRuUP: 'Enter',
  },
  ShiftLeft: {
    key: 'Shift', keyShift: 'Shift', keyRu: 'Shift', keyRuShift: 'Shift', keyUP: 'Shift', keyRuUP: 'Shift',
  },
  KeyZ: {
    key: 'z', keyShift: 'Z', keyRu: 'я', keyRuShift: 'Я', keyUP: 'Z', keyRuUP: 'Я',
  },
  KeyX: {
    key: 'x', keyShift: 'X', keyRu: 'ч', keyRuShift: 'Ч', keyUP: 'X', keyRuUP: 'Ч',
  },
  KeyC: {
    key: 'c', keyShift: 'C', keyRu: 'с', keyRuShift: 'С', keyUP: 'C', keyRuUP: 'С',
  },
  KeyV: {
    key: 'v', keyShift: 'V', keyRu: 'м', keyRuShift: 'М', keyUP: 'V', keyRuUP: 'М',
  },
  KeyB: {
    key: 'b', keyShift: 'B', keyRu: 'и', keyRuShift: 'И', keyUP: 'B', keyRuUP: 'И',
  },
  KeyN: {
    key: 'n', keyShift: 'N', keyRu: 'т', keyRuShift: 'Т', keyUP: 'N', keyRuUP: 'Т',
  },
  KeyM: {
    key: 'm', keyShift: 'M', keyRu: 'ь', keyRuShift: 'Ь', keyUP: 'M', keyRuUP: 'Ь',
  },
  Comma: {
    key: ',', keyShift: '<', keyRu: 'б', keyRuShift: 'Б', keyUP: ',', keyRuUP: 'Б',
  },
  Period: {
    key: '.', keyShift: '>', keyRu: 'ю', keyRuShift: 'Ю', keyUP: '.', keyRuUP: 'Ю',
  },
  Slash: {
    key: '/', keyShift: '?', keyRu: '.', keyRuShift: ',', keyUP: '/', keyRuUP: ',',
  },
  ArrowUp: {
    key: '⇧', keyShift: '⇧', keyRu: '⇧', keyRuShift: '⇧', keyUP: '⇧', keyRuUP: '⇧',
  },
  ShiftRight: {
    key: 'Shift', keyShift: 'Shift', keyRu: 'Shift', keyRuShift: 'Shift', keyUP: 'Shift', keyRuUP: 'Shift',
  },
  ControlLeft: {
    key: 'Ctrl', keyShift: 'Ctrl', keyRu: 'Ctrl', keyRuShift: 'Ctrl', keyUP: 'Ctrl', keyRuUP: 'Ctrl',
  },
  MetaLeft: {
    key: 'Win', keyShift: 'Win', keyRu: 'Win', keyRuShift: 'Win', keyUP: 'Win', keyRuUP: 'Win',
  },
  AltLeft: {
    key: 'Alt', keyShift: 'Alt', keyRu: 'Alt', keyRuShift: 'Alt', keyUP: 'Alt', keyRuUP: 'Alt',
  },
  Space: {
    key: ' ', keyShift: ' ', keyRu: ' ', keyRuShift: ' ', keyUP: ' ', keyRuUP: ' ',
  },
  AltRight: {
    key: 'Alt', keyShift: 'Alt', keyRu: 'Alt', keyRuShift: 'Alt', keyUP: 'Alt', keyRuUP: 'Alt',
  },
  ArrowLeft: {
    key: '⇦', keyShift: '⇦', keyRu: '⇦', keyRuShift: '⇦', keyUP: '⇦', keyRuUP: '⇦',
  },
  ArrowDown: {
    key: '⇩', keyShift: '⇩', keyRu: '⇩', keyRuShift: '⇩', keyUP: '⇩', keyRuUP: '⇩',
  },
  ArrowRight: {
    key: '⇨', keyShift: '⇨', keyRu: '⇨', keyRuShift: '⇨', keyUP: '⇨', keyRuUP: '⇨',
  },
  ControlRight: {
    key: 'Ctrl', keyShift: 'Ctrl', keyRu: 'Ctrl', keyRuShift: 'Ctrl', keyUP: 'Ctrl', keyRuUP: 'Ctrl',
  },
};
export default letters;
