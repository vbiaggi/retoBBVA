export const getUser = (faceToken) => {
    const response = fetch('https://social-bbva.herokuapp.com/profile', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Face-Token': faceToken
        },
        method: "GET",
    })
        .then(res => { console.log(res) })
        .catch(res => { console.log(res) })
    console.log("response:  ", response)
}
