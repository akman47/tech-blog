async function editPostFormHandler(event) {
    event.preventDefault();


}

document.querySelector('.btn-post').addEventListener('submit', editPostFormHandler);

document.querySelector('.btn-comment').addEventListener('click', function () {
    document.querySelector('.comment-modal').style.display="block";
});