async function deleteComment(event) {
    event.preventDefault();

    const comment_id = document.querySelector('.btn-delete-comment').getAttribute('data-id');
    console.log("click " + comment_id);

    // const response = await fetch(`/api/comments/${comment_id}`, {
    //     method: 'DELETE'
    // });

    // if (response.ok) {
    //     document.location.reload();
    // }
    // else {
    //     alert(response.statusText);
    // }
}

document.querySelector('.btn-delete-comment').addEventListener('click', deleteComment);