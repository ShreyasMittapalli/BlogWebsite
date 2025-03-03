import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        const foundBlog = blogs.find((b) => b.id === parseInt(id));
        setBlog(foundBlog);
    }, [id]);

    if (!blog) {
        return <h2>Blog not found!</h2>;
    }

    return (
        <div className="blog-detail">
            <Header />
            <div className="blog-content">
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
            </div>
            <Footer />
        </div>
    );
};

export default BlogDetail;
