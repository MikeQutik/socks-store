import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import styles from "./Navigation.module.css";
import UserApi from "../../entities/User/UserApi";

function Navigation({ user, setUser }) {
  const navigate = useNavigate();

  const handlerLogout = async (event) => {
    event.preventDefault();
    // console.log(123);

    const data = await UserApi.logout();
    console.log(data);
    setUser(null);
  };

  return (
    <>
      <div className={styles.text}>НОСОЧНЫЙ РЭНДОМ ШОП</div>
      <div className={styles.navigation}>
        <div className={styles.navLeft}>          
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>            
            <li>
              <Button className={styles.navButton} onClick={() => navigate("/")}>
                Главная по носкам
              </Button>
            </li>            
            {!user && (
              <li>
                <Button
                  className={styles.navButton}
                  onClick={() => navigate("/auth/authorization")}
                >
                  Вход без носков
                </Button>
                <Button
                  className={styles.navButton}
                  onClick={() => navigate("/auth/registration")}
                >
                  Носочная регистрация
                </Button>
              </li>
            )}                           
            {user && (
              <li>
                <Button className={styles.navButton} onClick={handlerLogout}>
                  Выход с носками
                </Button>
                <Button
                className={styles.navButton}
                onClick={() => navigate("/Generator")}
              >
                Носкомагия
              </Button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
