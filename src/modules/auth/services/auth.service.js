async function getUser(faceToken) {
    const response = await fetch('https://social-bbva.herokuapp.com/profile', {
        headers: {
            'FaceToken': faceToken,
        },
        method: 'GET'
    })
        .then((resp) => resp.json())
        .then((resp) => resp)
        .catch(function (error) {
            console.log(error);
        });
    sessionStorage.setItem("userInfo", response)
    return response;
};

export default getUser;
