async function deleteComment(event) {
    event.preventDefault();

    const comment_id = event.target.getAttribute('data-id');
    console.log("click " + comment_id);

    if (comment_id) {
        const response = await fetch(`/api/comments/${comment_id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
         document.location.reload();
        }
        else {
        alert(response.statusText);
        }
    }
}

document.querySelector('.comments-text').addEventListener('click', deleteComment);