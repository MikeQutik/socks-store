/* eslint-disable react/prop-types */
import UserApi from "../../entities/User/UserApi";
import { useNavigate } from "react-router-dom";

function AuthorizationForm({ userData }) {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, setUser } = userData;

  const handlerAuthorization = async (event) => {
    event.preventDefault();
    const { data } = await UserApi.authorization({ email, password });

    console.log(data);

    setEmail("");
    setPassword("");
    setUser(data.user);
    navigate("/");
  };

  return (
    <form
      onSubmit={handlerAuthorization}
      className="container"
      method="post"
      action="/registration"
    >
      <div className="mb-3">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          className="form-control"
          placeholder="Email address"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Authorization
      </button>
    </form>
  );
}

export default AuthorizationForm;
