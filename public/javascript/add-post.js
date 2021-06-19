async function newPostFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#new-post-body').value.trim();

    console.log(title, content);
    document.querySelector('.modal').style.display="none";

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
};

function openPostModal (event) {
    event.preventDefault();

    document.querySelector('.modal').style.display="block";
};

function closePostModal (event) {
    event.preventDefault();

    document.querySelector('.modal').style.display="none";
};

document.querySelector('.new-post-form').addEventListener('submit', newPostFormHandler);
document.querySelector('#add-new-post').addEventListener('click', openPostModal);
document.querySelector('#btn-close').addEventListener('click', closePostModal);