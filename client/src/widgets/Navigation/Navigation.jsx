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
      <div className={styles.text}>random socks store</div>
      <div className={styles.navigation}>
        <div className={styles.navLeft}>

          {/* Логотип */}
          <img
            src="logo.png"
            alt="Logo"
            className={styles.logo}
            onClick={() => navigate("/")}
          />
  
          {/* Список навигации */}
          <ul className="navbar-nav" 

          >
            {/* Главная страница */}
            <li>
              <Button className={styles.navButton} onClick={() => navigate("/")}>
                Главная по носкам
              </Button>
            </li>
  
            {/* Если пользователь не аутентифицирован, показать "Вход" и "Регистрация" */}
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
  
            {/* Ссылка на "Носкомагия" */}
            <li>
              <Button
                className={styles.navButton}
                onClick={() => navigate("/Generator")}
              >
                Носкомагия
              </Button>
            </li>
  
            {/* Если пользователь аутентифицирован, показать кнопку "Выход" */}
            {user && (
              <li>
                <Button className={styles.navButton} onClick={handlerLogout}>
                  Выход с носками
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
