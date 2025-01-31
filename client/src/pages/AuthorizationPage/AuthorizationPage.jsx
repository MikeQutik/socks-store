/* eslint-disable react/prop-types */
import AuthorizationForm from "../../widgets/AuthorizationForm/AuthorizationForm";

function AuthorizationPage({ userData }) {
    return (
        <>
            <h1>Authorization Page</h1>

            <AuthorizationForm userData={userData} />
        </>
    );
}

export default AuthorizationPage;