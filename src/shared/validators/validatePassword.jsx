export const validatePassword = (password) => {
    const regex = /^\S{6,12}$/;
    return regex.test(password);
}

export const validatePasswordMessage = 'The password must be between 6 and 12 characters without spaces.'