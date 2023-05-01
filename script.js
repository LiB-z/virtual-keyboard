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
  textScreen.classList.add('page__text');
  textScreen.setAttribute('name', 'textField');
  textScreen.setAttribute('id', 'textField');
  textScreen.setAttribute('cols', '80');
  textScreen.setAttribute('rows', '10');
  textScreen.setAttribute('autofocus', 'autofocus');
  textScreen.value = `На момент создания PR ввод текста в данное поле не реализован.
К проверке доступны все прочие разделы ТЗ.`;
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
function AddActStyle() {
  const keyboard = document.querySelector('.keyboard');
  const key = keyboard.querySelectorAll('.key');
  key.forEach((e) => {
    if (CapsLockOn && e.classList.contains('key_CapsLock')) e.classList.add('key_active');
    Object.keys(combinate).forEach((keys) => {
      if (e.classList.contains(`key_${keys}`)) e.classList.add('key_active');
    });
  });
}
function CreatingKeys(Shift = false) {
  const keyboard = document.querySelector('.keyboard');
  keyboard.innerHTML = '';
  Object.keys(letters).forEach((key) => {
    const newKey = document.createElement('div');
    newKey.classList.add('key');
    newKey.classList.add(`key_${key}`);
    // Shift + CapsLock
    if ((combinate.CapsLock || CapsLockOn) && Shift) {
      if (lang === 'en') {
        newKey.textContent = `${letters[key].key}`;
      } else if (lang === 'ru') {
        newKey.textContent = `${letters[key].keyRu}`;
      }
    } else {
      // Shift
      if ((combinate.ShiftLeft || combinate.ShiftRight) && !combinate.CapsLock && !CapsLockOn) {
        if (lang === 'en') {
          newKey.textContent = `${letters[key].keyShift}`;
        } else if (lang === 'ru') {
          newKey.textContent = `${letters[key].keyRuShift}`;
        }
      }
      // CapsLock
      if ((combinate.CapsLock && CapsLockOn) || (!combinate.CapsLock && CapsLockOn)) {
        if (lang === 'en') {
          newKey.textContent = `${letters[key].keyUP}`;
        } else if (lang === 'ru') {
          newKey.textContent = `${letters[key].keyRuUP}`;
        }
      }
      // LoweCase
      if (!Shift && ((!CapsLockOn && !combinate.CapsLock) || (!CapsLockOn && combinate.CapsLock))) {
        if (lang === 'en') {
          newKey.textContent = `${letters[key].key}`;
        } else if (lang === 'ru') {
          newKey.textContent = `${letters[key].keyRu}`;
        }
      }
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
function ReactingOnKey(event) {
  if (event.type === 'keydown') event.preventDefault();
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
  // Shift
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight' || event.target.classList.contains('key_ShiftLeft')) {
    if (event.repeat || (combinate.ShiftLeft && combinate.ShiftRight)) return;
    CreatingKeys(true);
    AddActStyle(event);
  }
  // CapsLock
  if (event.code === 'CapsLock' || event.target.classList.contains('key_CapsLock')) {
    if (event.repeat) return;
    if (!CapsLockOn) {
      CapsLockOn = true;
      CreatingKeys();
    } else {
      CapsLockOn = false;
    }
    CreatingKeys();
    AddActStyle(event);
  }
}
function ReactingOutKey(event) {
  event.preventDefault();
  // Remove active style;
  const keyboard = document.querySelector('.keyboard');
  const key = keyboard.querySelectorAll('.key');
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    CreatingKeys(false);
    delete combinate[event.code];
    AddActStyle();
  }
  key.forEach((e) => {
    if (e.classList.contains(`key_${event.code}`)) {
      e.classList.remove('key_active');
      // CAPSLOCK check
      if (event.code === 'CapsLock' && CapsLockOn) {
        CreatingKeys();
        AddActStyle(event);
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
