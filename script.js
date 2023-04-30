import letters from "./letters.json" assert { type: "json" };
const body = document.querySelector('body');
let lang = "en";
let CapsLockOn = "false";

let Arr = [];
document.onkeydown = function(event) {
    let list = {
        "key": event.key,
        "code": event.code,
        "charCode": event.charCode,
        "keyCode": event.keyCode
    }
    Arr.push(list)
    console.log( event,list);
}

function GeneratePage() {
    body.classList.add('page');
    GenerateTitle();
    GenerateTextArea();
    GenerateKeyboard();
    GenerateDescription();
    GenerateInstruction();
}
function GenerateTitle() {
    const h1 = document.createElement('h1');
    h1.classList.add('page__title');
    h1.textContent = `Виртуальная клавиатура`;
    body.append(h1);
}
function GenerateTextArea() {
    const textScreen = document.createElement('textarea');
    textScreen.classList.add('page__title');
    textScreen.setAttribute('name', "textField");
    textScreen.setAttribute('id', "textField");
    textScreen.setAttribute('cols', "80");
    textScreen.setAttribute('rows', "10");
    body.append(textScreen);
}
function GenerateKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    body.append(keyboard);
    CreatingKeys();
}
function GenerateDescription() {
    const instruction = document.createElement('div');
    instruction.classList.add('page__instruction');
    instruction.textContent = `Виртуальная клавиатура для операционной системы Windows`;
    body.append(instruction);
}
function GenerateInstruction() {
    const description = document.createElement('div');
    description.classList.add('page__description');
    description.textContent = `Переключение языка осуществляется комбинацией: левые CTRL + ALT`;
    body.append(description);
}
function CreatingKeys() {
    let keyboard = document.querySelector('.keyboard');
    for(let key in letters) {
        let newKey = document.createElement('div');
        newKey.classList.add('key');
        newKey.classList.add(`key_${key}`);
        if(lang == "en") {
            newKey.textContent = `${letters[key]["key"]}`
        }
        keyboard.append(newKey);
    }
}
window.addEventListener("load", GeneratePage);