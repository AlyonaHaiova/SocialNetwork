import {BASE_URL} from "../meta/AppConst";

export const getChat = async (id, friendId) => {
    const response = await fetch(`${BASE_URL}/${id}/messages/${friendId}`);
    return await response.json();
}

export const sendMessage = async (id, friendId, message) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}/messages/${friendId}`, {
            method: 'POST',
            body: JSON.stringify({text: message}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();

    } catch (error) {
        console.error('Error:', error);
    }
}
