export const validateUsername = (username) => {
    const regex = /^\S{3,8}$/;
    return regex.test(username);
}

export const validateUsernameMessage = 'The username must be between 3 and 8 characters without spaces.'