import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import styles from "./Navigation.module.css";

function Navigation() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.text}>НОСОЧНЫЙ РЭНДОМ ШОП</div>
      <div className={styles.navigation}>
        <div className={styles.navLeft}>
          <Button className={styles.navButton} onClick={() => navigate("/")}>
            Главная по носкам
          </Button>
          <Button
            className={styles.navButton}
            onClick={() => navigate("/Login")}
          >
            Вход без носка
          </Button>
          <Button
            className={styles.navButton}
            onClick={() => navigate("/Registration")}
          >
            Носочная регистрация
          </Button>
          <Button
            className={styles.navButton}
            onClick={() => navigate("/Generator")}
          >
            Носкомагия
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navigation;
