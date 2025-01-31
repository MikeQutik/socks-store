
import RegistrationForm from "../../widgets/RegistrationForm.jsx/RegistrationForm";

function RegistrationPage({ userData }) {
    return (
        <>
           

            <RegistrationForm userData={userData} />
        </>
    );
}

export default RegistrationPage;