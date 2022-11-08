import {BASE_URL} from "../meta/AppConst";

export const getRequestsToUser = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}/requests/received`);
    return await response.json();
}

export const getRequestsFromUser = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}/requests/sent`);
    return await response.json();
}

export const sendRequest = async (id, friendId) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}/requests/${friendId}`, {
            method: 'POST',
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

export const acceptRequest = async (id, relationshipId) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}/requests/${relationshipId}/accept`, {
            method: 'PUT',
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

export const declineRequest = async (id, relationshipId) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}/requests/${relationshipId}/decline`, {
            method: 'PUT',
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

export const cancelRequest = async (id, relationshipId) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}/requests/sent/${relationshipId}`, {
            method: 'DELETE',
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}
