import './style.css';

import { getData, setData } from './api.js';
import renderList from './render.js';
import StorageManager from './StorageManager.js';

const refreshBtn = document.querySelector('.refresh');
const form = document.querySelector('form');

refreshBtn.addEventListener('click', async () => {
  const list = await getData();

  renderList(list);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const score = {
    user: form.elements.username.value.trim(),
    score: form.elements.score.value.trim(),
  };

  form.reset();

  await setData(score);
  const localStorage = StorageManager.getData();

  localStorage.push(score);
  StorageManager.storeData(localStorage);
  renderList(localStorage);
});

// added this to load from localstorage on page load
const localStorage = StorageManager.getData();
renderList(localStorage);
