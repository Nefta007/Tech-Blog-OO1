const elblogForm = document.querySelector('.new-post-form');
const elpostList = document.querySelector('.post-list');

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


const deleteHandler = async (event) =>{
    event.preventDefault();

    if(event.target.hasAttribute('data-id')){
        const response = await fetch(`/api/blogRoutes/${id}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed  to delete blog.');
        }
    }
};

elpostList.addEventListener('click', deleteHandler);

elblogForm.addEventListener('submit', dashboardHandler);