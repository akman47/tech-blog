async function deletePostDashboard(event) {
    event.preventDefault();

    const post_id = event.target.getAttribute('data-id');
    //console.log('data-id'+ post_id);

    if(post_id) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    }
    else {
        const edit_post_id = event.target.getAttribute('data-post-id');
        window.location.replace(`/dashboard/edit/${edit_post_id}`);
    }
}

document.querySelectorAll('.btn-edit-container').forEach(btn => btn.addEventListener('click', deletePostDashboard));