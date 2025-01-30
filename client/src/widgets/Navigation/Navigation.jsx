import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import styles from "./Navigation.module.css";

function Navigation() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.text}>random socks store</div>
      <div className={styles.navigation}>
        <div className={styles.navLeft}>
          <Button className={styles.navButton} onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            className={styles.navButton}
            onClick={() => navigate("/Login")}
          >
            Вход
          </Button>
          <Button
            className={styles.navButton}
            onClick={() => navigate("/Registration")}
          >
            Регистрация
          </Button>
          <Button
            className={styles.navButton}
            onClick={() => navigate("/Generator")}
          >
            Генератор носков
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navigation;
