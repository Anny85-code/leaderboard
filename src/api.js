const apiKey = 'bdn30omCICeExhdmH62P';

const setData = async (score) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(score),
    },
  );

  const { result } = await response.json();

  return result;
};

const getData = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`,
  );

  const { result } = await response.json();

  return result;
};

export { getData, setData };
