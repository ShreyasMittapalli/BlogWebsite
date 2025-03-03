import './Home.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
        if (storedBlogs) {
            setBlogs(storedBlogs);
        }
    }, []);

    const addBlog = () => {
        if (title && content) {
            const newBlog = { id: Date.now(), title, content }; 
            const updatedBlogs = [...blogs, newBlog];

            setBlogs(updatedBlogs);
            localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
            setShowForm(false);
            setTitle("");
            setContent("");
        }
    };

    const startEditing = (id, currentTitle, currentContent) => {
        setEditingId(id);
        setEditTitle(currentTitle);
        setEditContent(currentContent);
    };

    const saveEdit = (id) => {
        const updatedBlogs = blogs.map((blog) =>
            blog.id === id ? { ...blog, title: editTitle, content: editContent } : blog
        );

        setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
        setEditingId(null);
    };

    const deleteBlog = (id) => {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    };

    return (
        <div className="home-container">
            <Header />
            <div className='content'>
                <div className='btn-div'>
                    <button className='create-new' onClick={() => setShowForm(!showForm)}>
                        <IoMdAddCircleOutline />
                    </button>
                </div>

                {showForm && (
                    <div className="blog-form">
                        <input 
                            type="text" 
                            placeholder="Title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                        <textarea 
                            placeholder="Write your blog..." 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                        />
                        <button onClick={addBlog}>Submit</button>
                    </div>
                )}

                <div className='blog-cards'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='blog-card'>
                            {editingId === blog.id ? (
                                <div className="edit-form">
                                    <input 
                                        type="text" 
                                        value={editTitle} 
                                        onChange={(e) => setEditTitle(e.target.value)} 
                                    />
                                    <textarea 
                                        value={editContent} 
                                        onChange={(e) => setEditContent(e.target.value)} 
                                    />
                                    <button onClick={() => saveEdit(blog.id)}>Save</button>
                                    <button onClick={() => setEditingId(null)}>Cancel</button>
                                </div>
                            ) : (
                                <>
                                    <h3>{blog.title}</h3>
                                    <p>{blog.content.substring(0, 100)}...</p>
                                    <div className="blog-actions">
                                        <button onClick={() => navigate(`/home/blogs/${blog.id}`)}>View</button>
                                        <button onClick={() => startEditing(blog.id, blog.title, blog.content)}>Edit</button>
                                        <button onClick={() => deleteBlog(blog.id)} className="delete-btn">Delete</button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
