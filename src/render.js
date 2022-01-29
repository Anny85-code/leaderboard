const star = "<i class='fa fa-star' aria-hidden='true'></i>";
const renderList = (list) => {
  const container = document.querySelector('.table ul');
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = '<li>No scores recorded</li>';
    return;
  }

  list
    .sort((a, b) => b.score - a.score)
    .filter((item) => item.user !== '')
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

const Footer = () => {
  const footer = document.querySelector('footer');
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `<footer>
                @ Copyright ${currentYear} Aniekan Udo | All Rights Reserved
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>`;
};

Footer();
export default renderList;
