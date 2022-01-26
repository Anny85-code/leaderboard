const star = `<i class='fa fa-star' aria-hidden='true'></i>`;
const renderList = (list) => {
  const container = document.querySelector('.table ul');
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = '<li>Empty</li>';
    return;
  }

  list
    .sort((a, b) => b.score - a.score)
    .forEach((score, index) => {
      const li = document.createElement('li');
      if (index < 3) {
        li.innerHTML = star;
      }

      if (index > 3) {
        document.querySelector('.table').style.overflow = 'hidden';
      }

      li.innerHTML += `${score.user}: ${score.score}`;
      li.id = index;

      container.appendChild(li);
    });
};

export default renderList;
