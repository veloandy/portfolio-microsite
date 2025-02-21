document.addEventListener('DOMContentLoaded', () => {
    // Add truncated class to all blog posts initially
    document.querySelectorAll('.blog-post-content').forEach(content => {
        content.classList.add('truncated');
    });

    // Handle click events
    document.querySelectorAll('.blog-post').forEach(post => {
        post.addEventListener('click', () => {
            // Toggle expanded state
            post.classList.toggle('expanded');
            post.querySelector('.blog-post-content').classList.toggle('truncated');
        });
    });

}); 