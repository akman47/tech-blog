async function editPostFormHandler(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length-1];

    const title = document.querySelector('input[name="edit-post-title"]').value.trim();
    const post_text = document.querySelector('input[name="edit-post-body"]').value.trim();

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
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

const click = document.querySelector('.btn-post').addEventListener('click', editPostFormHandler);

document.querySelector('.btn-comment').addEventListener('click', function () {
    document.querySelector('.comment-modal').style.display="block";
});