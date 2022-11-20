const apiUrl = {
  GET: 'https://27.javascript.pages.academy/kekstagram-simple/data',
  POST: 'https://27.javascript.pages.academy/kekstagram-simpl'
};

const getData = (onSuccess, onError) => {
  fetch(apiUrl.GET)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      onError();
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(apiUrl.POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export {getData, sendData};
