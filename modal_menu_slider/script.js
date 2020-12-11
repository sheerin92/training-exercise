const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

//Toggle Nav-bar
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

//Open modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

//close modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

//Hide modal
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);