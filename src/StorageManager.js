export default class StorageManager {
  static storeData = (scoreData) => {
    localStorage.setItem('scoreData', JSON.stringify(scoreData));
  };

  static getData = () => (localStorage.getItem('scoreData')
    ? JSON.parse(localStorage.getItem('scoreData'))
    : []);
}
