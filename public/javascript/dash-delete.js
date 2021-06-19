async function deletePostDashboard(event) {
    event.preventDefault();

    const post_id = document.querySelector('.btn-delete-dashboard').getAttribute('data-id');
    console.log(post_id);

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

document.querySelector('.btn-delete-dashboard').addEventListener('click', deletePostDashboard);