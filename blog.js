const blogPosts = [
    {
        title: "How to Run Stable Diffusion Locally",
        date: "July 14, 2024",
        snippet: "Stable Diffusion is a powerful AI model that can generate images from text descriptions",
        link: "blog/blog1-07142024.html"
    },
    // Add more blog posts here
];

function displayBlogPosts(posts, limit = 3) {
    const blogContainer = document.getElementById('blog-posts');
    const displayPosts = posts.slice(0, limit);

    displayPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <h3><a href="${post.link}">${post.title}</a></h3>
            <p class="date">${post.date}</p>
            <p>${post.snippet}</p>
        `;
        blogContainer.appendChild(postElement);
    });
}

// Call this function when the page loads
window.onload = () => displayBlogPosts(blogPosts);