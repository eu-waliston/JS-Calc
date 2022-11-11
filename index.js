import changeColor from './modules/changeColor.js';
import copyContent from './modules/copy.js';
import calculate from './modules/calculate.js';
import clear from './modules/clear.js';
import keyPressed from './modules/keyPresssed.js';
import charKeyBtn from './modules/charKeyBtn.js';

document.querySelectorAll(".charKey").forEach(charKeyBtn);

input.addEventListener("keydown", keyPressed)

document.getElementById("clear").addEventListener("click", clear)

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById('copyToClipboard').addEventListener('click', copyContent);

document.getElementById("themeSwitcher").addEventListener("click", changeColor)