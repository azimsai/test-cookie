let user = {
  userId: 'device4@gmail.com',
  password: 'password',
};

let login = async function () {
  let response = await fetch(
    'https://journal.editaware.com/editaware/user/authorization',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    }
  );
  let result = await response.json();
  alert(JSON.stringify(result));
};

let getData = async function () {
  let response = await fetch(
    'https://journal.editaware.com/api/v1.0/abstract/reviewer/topics',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Cache: 'no-cache',
      },
      credentials: 'include',
    }
  );
  let result = await response.json();
  alert(JSON.stringify(result));
};
