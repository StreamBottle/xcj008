function ajax({
  method = '',
  url = '',
  async = true,
  data = {},
  headers = {}
}) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, `${url}?t=${new Date().getTime()}`, async);
  xhr.withCredentials = true;
  for (let key in headers) {
    xhr.setRequestHeader(key, headers[key]);
  }
  if (method.toUpperCase() === 'POST') {
    xhr.setRequestHeader('content-type', 'application/json');
  }
  // if (method.toUpperCase() === 'GET') {
  //   xhr.setRequestHeader('content-type', 'application/json');
  // }

  let sendString = typeof data === 'string' ? data : JSON.stringify(data);
  xhr.send(sendString);

  return new Promise((resolve, reject) => {
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(xhr.response);
    };
  });
};
export {
  ajax
}
export default {
  ajax
}
