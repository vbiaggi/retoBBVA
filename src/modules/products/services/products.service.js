async function getProducts(faceToken) {
    const response = await fetch('https://social-bbva.herokuapp.com/products', {
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
    return response;
};

export default getProducts;
