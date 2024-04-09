import axios from "axios";

export const doSignUp = (name, email, password) => async (dispatch) => {
  await axios
    .post("http://localhost:8000/api/users/signup", {
      Name: name,
      Email: email,
      Password: password,
    })
    .then((response) => {
      console.log(response);
    });
};

export const doSignIn = (email, password) => async (dispatch) => {
  await axios
    .post("http://localhost:8000/api/users/login", {
      Email: email,
      Password: password,
    })
    .then((response) => {
      console.log(response);
    });
};
// });
//   (name, email, password) => async (dispatch, getState) => {
//     axios.post(`${getApiBaseUrl()}/users/signup`)
//     console.log(data);
//   };
const responseErrorHandler = (response) => {
  if (!response.ok) {
    throw response;
  }
  return response;
};

const getToken = () =>
  new Promise((resolve, reject) => {
    try {
      const getToken = window.localStorage.getItem("ecommerceJWTToken");
      resolve({ token: getToken });
    } catch {
      reject();
    }
  });

export const getAllPosts = () =>
  fetch("/api/posts")
    .then(responseErrorHandler)
    .then((res) => res.json());

export const getPostById = (postId) =>
  fetch(`/api/post/${postId}`)
    .then(responseErrorHandler)
    .then((res) => res.json());

// export const doSignIn = (email, password) =>
//   new Promise((resolve, reject) => {
//     return fetch("/api/login", {
//       method: "POST",
//       cache: "no-cache",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then(responseErrorHandler)
//       .then((res) => res.json())
//       .then((data) => {
//         const { token, user } = data;
//         window.localStorage.setItem("ecommerceJWTToken", token);
//         window.localStorage.setItem("ecommerceJWTUser", JSON.stringify(user));
//         resolve(user);
//       })
//       .catch((error) => {
//         error.json().then(({ error }) => reject(error));
//       });
//   });

// export const doSignUp = (name, email, password) =>
//   new Promise((resolve, reject) => {
//     axios("${getApiBaseUrl()}/users/${signup}", {
//       method: "POST",
//       cache: "no-cache",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, password }),
//     })
//       .then(responseErrorHandler)
//       .then((res) => res.json())
//       .then((data) => {
//         const { token, user } = data;
//         window.localStorage.setItem("ecommerceJWTToken", token);
//         window.localStorage.setItem("ecommerceJWTUser", JSON.stringify(user));
//         resolve(user);
//       })
//       .catch((error) => {
//         error.json().then(({ error }) => reject(error));
//       });
//   });

export const doSignOut = () =>
  new Promise((resolve, reject) => {
    try {
      window.localStorage.removeItem("ecommerceJWTToken");
      window.localStorage.removeItem("ecommerceJWTUser");
      resolve(true);
    } catch {
      reject(false);
    }
  });

export const initUser = () =>
  new Promise((resolve, reject) => {
    try {
      const getToken = window.localStorage.getItem("ecommerceJWTToken");
      const getUser = JSON.parse(
        window.localStorage.getItem("ecommerceJWTUser")
      );
      if (getToken) {
        return fetch("/api/verify", {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: getToken }),
        })
          .then(responseErrorHandler)
          .then((res) => res.json())
          .then(() => resolve(getUser))
          .catch(() => {
            window.localStorage.removeItem("ecommerceJWTToken");
            window.localStorage.removeItem("ecommerceJWTUser");
            reject("User state could not be initialized");
          });
      }
    } catch {
      resolve({});
    }
  });

export const addPostAndFetch = (postToSave) =>
  getToken()
    .then(({ token }) =>
      fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-cache",
        body: JSON.stringify({ post: postToSave }),
      })
    )
    .then(responseErrorHandler)
    .then((res) => res.json());

export const deletePostAndFetch = (postId) =>
  getToken()
    .then(({ token }) =>
      fetch(`/api/post/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-cache",
      })
    )
    .then(responseErrorHandler)
    .then((res) => res.json())
    .then(() => getAllPosts());
