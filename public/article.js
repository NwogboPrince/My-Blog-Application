// Select DOM elements
const toggleBtn = document.querySelector('.btn');  
const articlesContainer = document.querySelector('.articles');  

// Toggle dark theme
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {  
        document.documentElement.classList.toggle('dark-theme');  
    });
}

// Check if articles array exists
if (!articles || articles.length === 0) {
    articlesContainer.innerHTML = '<p>No articles available.</p>';
} else {
    // Generate articles HTML
    const articlesData = articles.map((article) => {
        const { title, date, length, snippet } = article;

        // Format date using moment.js
        const formatDate = moment(date).format('MMMM Do, YYYY');

        return `
        <article class="post">
            <h2>${title}</h2>
            <div class="post-info">
                <span>${formatDate}</span>
                <span>${length} mins read</span>
            </div>
            <p>${snippet}</p>
        </article>`;
    }).join('');

    // Insert articles into the container
    articlesContainer.innerHTML = articlesData;
}
