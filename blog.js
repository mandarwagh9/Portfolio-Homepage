const blogPosts = [
    {
        title: "How to Run Stable Diffusion Locally",
        date: "July 14, 2024",
        snippet: "Stable Diffusion is a powerful AI model that can generate images from text descriptions",
        link: "blog/How-to-Run-Stable-Diffusion-Locally.html"
    },
    {
        title: "Predicting MHT-CET Ranks",
        date: "July 15, 2024",
        snippet: "he 'Rank-Predictor-MHT-CET' repository is a meticulously crafted tool designed to predict the ranks of students based on their MHT-CET scores.",
        link: "blog/Predicting-MHTCET-Ranks.html"
    },
    {
        title: "NASA Image Search Engine",
        date: "August 2, 2024",
        snippet: " NASA Image Search Engine is a web application that allows users to search for, view, and download images from NASA's extensive image library.",
        link: "blog/NASA-Image-Search-Engine.html"
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
