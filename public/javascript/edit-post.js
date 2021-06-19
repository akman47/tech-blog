async function editPostFormHandler(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length-1];

        console.log(post_id);

    const post_title = document.querySelector('input[name="edit-post-title"]').value.trim();
    const post_text = document.querySelector('input[name="edit-post-body"]').value.trim();

    const response = await fetch(`/edit/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
        return;
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('.btn-post').addEventListener('submit', editPostFormHandler);

document.querySelector('.btn-comment').addEventListener('click', function () {
    document.querySelector('.comment-modal').style.display="block";
});