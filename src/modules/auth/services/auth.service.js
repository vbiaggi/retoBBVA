async function getUser(faceToken) {
    return fetch('https://social-bbva.herokuapp.com/profile', {
        headers: {
            'Content-Type': 'application/json',
            'FaceToken': "EAAEKa3Ed9QMBAHCb7A6bL0BFQl6v2tc7O5XJ0esaHT7SG4kuFhw6DMrrTIWpm9vDV1oJ1S7TWkWS8vE6DYDqtuakDZCdhLou5dIQdkSlhhJC9qPC4NwHqZCYsZBIVpczuVXTqe6kZA3890yKl84vZCa886KYOHDB0F0eBTmKfkKHmAnk2vWKUsf6ZA5ZADwuQIYOwh3vVJ6XDO2VsLdssWuiGimsA70SplYuAolXZBL9QwZDZD",
        },
        method: 'GET'
    })
        .then((resp) => resp.json())
        .then((resp) => resp)
        .catch(function (error) {
            console.log(error);
        });
};

export default getUser;
