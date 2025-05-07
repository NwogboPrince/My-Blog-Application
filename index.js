import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import moment from "moment";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // For static files
app.set("view engine", "ejs");
app.set("views", "./views/partials"); // Set views directory

// Temporary Storage for Blog Posts
let posts = [];

// Articles Array
const articles = [
    {
        id: 1,
        title: "Exploring the Ancient Ruins of Machu Picchu",
        content: "Join us for an unforgettable journey through the stunning landscapes of Peru as we explore the ancient ruins of Machu Picchu.",
        author: "John Doe",
        date: new Date(2025, 1, 1)
    },
    {
        id: 2,
        title: "Safari Adventure in Kenya",
        content: "Experience the thrill of a lifetime on our guided safari tour through the beautiful national parks of Kenya.",
        author: "Jane Smith",
        date: new Date(2024, 8, 4)
    },
    {
        id: 3,
        title: "Romantic Getaway in Paris",
        content: "Discover the magic of Paris with your loved one. Enjoy romantic dinners, stunning views from the Eiffel Tower, and a stroll along the Seine River in the city of love.",
        author: "Emily Johnson",
        date: new Date(2020, 5, 14)
    },
    {
        id: 4,
        title: "Cultural Immersion in Kyoto",
        content: "Immerse yourself in the traditions of Japan as you explore Kyoto's stunning temples, participate in a tea ceremony, and savor delicious local cuisine.",
        author: "Michael Brown",
        date: new Date(2024, 2, 10)
    },
    {
        id: 5,
        title: "Scenic Road Trip Along the Amalfi Coast",
        content: "Breathe in the stunning views of the Amalfi Coast while visiting picturesque towns, dining on fresh seafood, and enjoying the Mediterranean sunshine.",
        author: "Sophia Davis",
        date: new Date(2024, 4, 22)
    }
];

// Routes

// Home Route
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// Route to show form for new post
app.get('/posts/new', (req, res) => {
    res.render('new');
});

// Create a new post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: Date.now().toString(),
        title,
        content
    };
    posts.push(newPost);
    res.redirect('/');
});

// View individual post
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.status(404).send('Post not found');
    res.render('show', { post });
});

// Show edit form
app.get('/posts/:id/edit', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.status(404).send('Post not found');
    res.render('edit', { post });
});

// Handle edit submission
app.post('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.status(404).send('Post not found');
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect('/');
});

// Delete post
app.post('/posts/:id/delete', (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect('/');
});

// Route to display all articles
app.get('/articles', (req, res) => {
    if (articles.length === 0) {
        return res.status(404).send('No articles available');
    }

    // Format the date for each article
    const formattedArticles = articles.map(article => ({
        ...article,
        formattedDate: moment(article.date).format('MMMM Do, YYYY')
    }));

    // Pass all articles to the template
    res.render('articles', { articles: formattedArticles });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Blog app running at http://localhost:${PORT}`);
});
