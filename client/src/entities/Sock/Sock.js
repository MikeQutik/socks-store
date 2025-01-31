class SockApi {
    static async createSock(newSock) {
        const response = await fetch('http://localhost:3000/api/sock', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newSock),
        });
        return await response.json();
    }

    static async deleteSockById(id) {
        const response = await fetch(`http://localhost:3000/api/sock'${id}`, {
            method: 'DELETE',
        });
        return await response.json();
    }
}