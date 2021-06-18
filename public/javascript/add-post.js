async function newPostFormHandler(event) {
    event.preventDefault();

    const title = docment.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-body').value.trim();

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
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

document.querySelector('.new-post-form').addEventListener('submit', newPostFormHandler);