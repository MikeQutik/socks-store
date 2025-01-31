import React from 'react';

function SockCreateForm({  }) {

    const [dropDowns, setDropDowns] = useState({});

    async function sendCreatedSock() {
        

    }


    
    return (
        <div>
             <Button text='Сохранить' onClick={sendCreatedSock} />
        </div>
    );
}

export default SockCreateForm;