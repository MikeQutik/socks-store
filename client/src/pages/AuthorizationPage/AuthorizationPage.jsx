/* eslint-disable react/prop-types */
import AuthorizationForm from "../../widgets/AuthorizationForm/AuthorizationForm";

function AuthorizationPage({ userData }) {
    return (
        <>
        

            <AuthorizationForm userData={userData} />
        </>
    );
}

export default AuthorizationPage;