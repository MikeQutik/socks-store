/* eslint-disable react/prop-types */
import UserApi from "../../entities/user/UserApi";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrationForm.module.css";
import { Button } from "antd";


function RegistrationForm({ userData }) {
  const {
    name,
    setName,
    password,
    confirmPassword,
    setConfirmPassword,
    setPassword,
    email,
    setEmail,
    setUser,
  } = userData;

  const navigate = useNavigate();

  const handlerRegistration = async (event) => {
    event.preventDefault();

    const { data } = await UserApi.registration({ name, email, password });

    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
    setUser(data.user);
    navigate("/");
  };

  return (
    <form
      onSubmit={handlerRegistration}
      className={styles.container}
      method="post"
      action="/registration"
    >
      <div className="mb-3">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          name="name"
          className={styles.element}
          placeholder="Your name"
          autoFocus
        />
      </div>
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
      <div className="mb-3">
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          name="password"
          className={styles.element}
          placeholder="Confirm password"
        />
      </div>
      <Button
        disabled={password === confirmPassword ? false : true}
        type="submit"
        className="btn btn-primary"
        onClick={handlerRegistration}
      >
        Регистрация
      </Button>
    </form>
  );
}

export default RegistrationForm;
