const elblogForm = document.querySelector('.new-post-form');

const dashboardHandler = async (event) =>{
    event.preventDefault();

    const postTitle = document.querySelector('#blog-title').value.trim();
    const postDescription = document.querySelector('#post-description').value.trim();

    if(postTitle && postDescription){
        const response = await fetch('/api/blogRoutes',{
            method: 'POST',
            body:JSON.stringify({ postTitle, postDescription }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed blogging.');
        }
    }
};

elblogForm.addEventListener('submit', dashboardHandler);