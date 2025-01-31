
import RegistrationForm from "../../widgets/RegistrationForm.jsx/RegistrationForm";

function RegistrationPage({ userData }) {
    return (
        <>
            <h1>Тут Регистрация</h1>

            <RegistrationForm userData={userData} />
        </>
    );
}

export default RegistrationPage;