export const validationAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

export const avatarUrlValidationMessage = 'This is not a valid URL.'