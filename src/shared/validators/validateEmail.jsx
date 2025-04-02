export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

export const emailValidateMessage = 'This is not a valid email address.'