import * as ui from "./ui.js";
import * as data from "./data.js";

const $searchBtn = $("button");

const init = () => {
    console.log("ready");

    setupEventHandler()
}

const setupEventHandler = () => {
    $searchBtn.on("click", onSearchClickHandler)
}

const onSearchClickHandler = () => {
    const inputText = ui.getSearchInput()
    data.fetchData(inputText, onSuccessDataHandler)
}

const onSuccessDataHandler = (usersArray) => {
    ui.displayUsers(usersArray);
}

export {
    init
}
