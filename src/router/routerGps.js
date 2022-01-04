export const goToHome = (history) => {
  history.push("/");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignup = (history) => {
  history.push("/signup");
};

export const goToDetails = (history, id) => {
  history.push(`/details${id}`);
};

