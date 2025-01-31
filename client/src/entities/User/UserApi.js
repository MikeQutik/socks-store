class UserApi {
  static async registration({ name, email, password }) {
    const response = await fetch("http://localhost:3000/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    return data;
  }

  static async authorization({ email, password }) {
    const response = await fetch("http://localhost:3000/auth/authorization", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    return data;
  }

  static async logout() {
    const response = await fetch("http://localhost:3000/auth/logout", {
      method: "DELETE",
    });

    return response;
  }

  //     static async refreshTokens() {
  //         const { data: response } = await axiosInstance.get('/auth/refreshTokens')

  //         return response;
  //     }
}

export default UserApi;
