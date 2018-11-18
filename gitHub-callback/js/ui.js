const $input = $("input");
const $ul = $("ul");

const getSearchInput = () => {
    return $input.val()
}

const displayUsers = (userList) => {

    $ul.empty();
    for (let i = 0; i < userList.length; i++) {

        // Nas entittet User - name, picture
        const user = userList[i];
        const userPic = user.picture;
        const $li = $("<li>");
        const $img = $("<img>");
        const $span = $("<span>")
        $img.attr("src", userPic);
        $span.append($img);

        $li.text(user.name);
        $ul.append($li);
    }
    
    $input.val("");
}

export {
    getSearchInput,
    displayUsers,
}
