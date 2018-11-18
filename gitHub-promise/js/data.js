import User from "./entities/User.js"

// const url = 'https://randomuser.me/api/?results=10';
const BASE_ENDPOINT = "https://api.github.com/search/users?q="

const fetchData = (inputText) => {

    const requestGitHubSearchURL = BASE_ENDPOINT + inputText;
    console.log(requestGitHubSearchURL);

    return fetch(requestGitHubSearchURL)
        .then(response => {
            return response.json()
        })
        .then(newResponse => {

            console.log(newResponse.items);

            const usersList = newResponse.items;

            const usersArray = [];
            for (let i = 0; i < usersList.length; i++) {
                const userData = usersList[i];
                const { login, avatar_url } = userData;

                const user = new User(login, avatar_url);
                usersArray.push(user);

            }

            return usersArray
        })
}

export {
    fetchData
}
