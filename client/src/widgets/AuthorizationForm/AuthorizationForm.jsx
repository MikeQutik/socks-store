/* eslint-disable react/prop-types */
import UserApi from "../../entities/User/UserApi";
import { useNavigate } from "react-router-dom";
import styles from "../RegistrationForm.jsx/RegistrationForm.module.css";
import { Button } from "antd";

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
      className={styles.container}
      method="post"
      action="/registration"
    >
      <div className="mb-3">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          className={styles.element}
          placeholder="Email address"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          className={styles.element}
          placeholder="Password"
        />
      </div>
      <Button type="submit" className="btn btn-primary" onClick={handlerAuthorization}>
        Авторизация
      </Button>
    </form>
  );
}

export default AuthorizationForm;
