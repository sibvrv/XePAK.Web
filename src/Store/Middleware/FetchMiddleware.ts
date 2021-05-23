import { Middleware, MiddlewareAPI } from "redux";

const requestStack: {
  action: string;
  params: Record<string, string>;
}[] = [];

const serverAPI = `https://www.xepak.com/play/server.php`;
let worker = false;

// Fake Worker

function startFakeWorker(store: MiddlewareAPI) {
  if (worker) {
    return;
  }

  worker = true;

  setInterval(() => {
    while (requestStack.length) {
      const request = requestStack.shift()!;

      const formData = new FormData();
      for (const key in request.params) {
        formData.append(key, request.params[key]);
      }

      fetch(serverAPI, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((response) => {
          if (request.action) {
            store.dispatch({
              type: request.action,
              payload: {
                ...request,
                response,
              },
            });
          }
        })
        .catch((error) => {
          if (request.action) {
            store.dispatch({
              type: request.action,
              payload: {
                ...request,
                response: `error|${JSON.stringify(error)}`,
              },
            });
          }
          console.error(error);
        });
    }
  }, 100);
}

export const FetchMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type === "FETCH") {
    requestStack.push(action.payload);
    startFakeWorker(store);
    return;
  }
  return next(action);
};
