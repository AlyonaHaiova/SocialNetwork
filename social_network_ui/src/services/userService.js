import {BASE_URL} from "../meta/AppConst";

export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}`);
    return await response.json();
}

export const getUser = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    return await response.json();
}

export const getFriends = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}/friends`);
    return await response.json();
}

export const getNotFriends = async (id, limit=3) => {
    const response = await fetch(`${BASE_URL}/${id}/random-users/${limit}`);
    return await response.json();
}

export const login = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

export const register = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

export const deleteFriend = async (id, friendId) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}/friends/${friendId}`, {
            method: 'DELETE',
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}



