async function deletePost(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1];

    const response = await fetch(`/api/post/${post_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('.btn-delete').addEventListener('click', deletePost);