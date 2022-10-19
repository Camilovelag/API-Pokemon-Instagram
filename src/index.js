import _ from 'lodash'; // eslint-disable-line
import './style.css';
import fetchPopup from './modules/popup/fetchPopup.js';
// import newId from './modules/popup/newId.js';
// import addComment from './modules/popup/addComment.js';
import comments from './modules/popup/comments.js';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popup');

openBtn.addEventListener('click', () => {
  fetchPopup(1);
  // newId();
  // addComment();
  comments(1);
  popup.style.display = 'flex';
});