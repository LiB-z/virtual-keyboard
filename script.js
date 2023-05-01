import letters from './assets/data/letters.js';

const body = document.querySelector('body');
let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
let CapsLockOn = false;
const combinate = {};

function GenerateTitle() {
  const h1 = document.createElement('h1');
  h1.classList.add('page__title');
  h1.textContent = 'Виртуальная клавиатура';
  body.append(h1);
}
function GenerateTextArea() {
  const textScreen = document.createElement('textarea');
  textScreen.classList.add('page__title');
  textScreen.setAttribute('name', 'textField');
  textScreen.setAttribute('id', 'textField');
  textScreen.setAttribute('cols', '80');
  textScreen.setAttribute('rows', '10');
  textScreen.setAttribute('autofocus', 'autofocus');
  body.append(textScreen);
}
function GenerateDescription() {
  const instruction = document.createElement('div');
  instruction.classList.add('page__instruction');
  instruction.textContent = 'Виртуальная клавиатура для операционной системы Windows';
  body.append(instruction);
}
function GenerateInstruction() {
  const description = document.createElement('div');
  description.classList.add('page__description');
  description.textContent = 'Переключение языка осуществляется комбинацией: левые CTRL + ALT';
  body.append(description);
}
function CreatingKeys() {
  const keyboard = document.querySelector('.keyboard');
  keyboard.innerHTML = '';
  Object.keys(letters).forEach((key) => {
    const newKey = document.createElement('div');
    newKey.classList.add('key');
    newKey.classList.add(`key_${key}`);
    if (lang === 'en') {
      newKey.textContent = `${letters[key].key}`;
    }
    if (lang === 'ru') {
      newKey.textContent = `${letters[key].keyRu}`;
    }
    keyboard.append(newKey);
  });
}
function GenerateKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  body.append(keyboard);
  CreatingKeys();
}
function GeneratePage() {
  body.classList.add('page');
  GenerateTitle();
  GenerateTextArea();
  GenerateKeyboard();
  GenerateDescription();
  GenerateInstruction();
}
function AddActStyle(event) {
  const keyboard = document.querySelector('.keyboard');
  const key = keyboard.querySelectorAll('.key');
  key.forEach((e) => {
    if (e.classList.contains(`key_${event.code}`)) e.classList.add('key_active');
    Object.keys(combinate).forEach((keys) => {
      if (e.classList.contains(`key_${keys}`)) e.classList.add('key_active');
    });
  });
}
function ReactingOnKey(event) {
  if (event.code) combinate[event.code] = true;
  // Add active style;
  AddActStyle(event);
  // lang change
  if (combinate.ControlLeft && combinate.AltLeft && (event.code === 'ControlLeft' || event.code === 'AltLeft')) {
    // Stop endless change
    if (event.repeat) return;
    if (lang === 'en') {
      lang = 'ru';
      CreatingKeys();
      AddActStyle(event);
    } else {
      lang = 'en';
      CreatingKeys();
      AddActStyle(event);
    }
  }
}
function ReactingOutKey(event) {
  event.preventDefault();
  // Remove active style;
  const keyboard = document.querySelector('.keyboard');
  const key = keyboard.querySelectorAll('.key');
  key.forEach((e) => {
    if (e.classList.contains(`key_${event.code}`)) {
      // CAPSLOCK check
      if (e.classList.contains('key_CapsLock') && !CapsLockOn) {
        CapsLockOn = true;
      } else if (e.classList.contains('key_CapsLock') && CapsLockOn) {
        e.classList.remove('key_active');
        CapsLockOn = false;
      } else {
        e.classList.remove('key_active');
      }
    }
  });
  delete combinate[event.code];
}

window.addEventListener('load', GeneratePage);
document.addEventListener('keydown', ReactingOnKey);
document.addEventListener('keyup', ReactingOutKey);
document.addEventListener('mousedown', ReactingOnKey);
document.addEventListener('click', ReactingOnKey);
window.addEventListener('beforeunload', () => localStorage.setItem('lang', lang));
