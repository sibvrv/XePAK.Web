import { Middleware, MiddlewareAPI } from "redux";

const requestStack: {
  action: string;
  params: Record<string, string>;
}[] = [];

const serverAPI = `https://www.xepak.com/api/server.php`;
let worker = false;

function toJSON(response: string) {
  const [status, ...parts] = response.split("|");
  return {
    status,
    parts,
  };
}

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
        .then((responseString) => {
          if (request.action) {
            const response = toJSON(responseString);

            if (response.status === "error") {
              store.dispatch({
                type: "FETCH_ERROR",
                payload: {
                  ...request,
                  response,
                },
              });
              return;
            }

            if (response.status !== "done") {
              return;
            }

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
                response: toJSON(`error|${JSON.stringify(error)}`),
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
