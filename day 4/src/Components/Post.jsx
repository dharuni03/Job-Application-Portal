import { useState } from 'react';
import '../Style/Post.css'; 

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [editPostId, setEditPostId] = useState(null);

  const [formData, setFormData] = useState({
    jobName: '',
    education: '',
    location: '',
    salary: '',
  });

  const addPost = () => {
    if (newPost.trim() === '') return;

    const newPostObject = {
      id: Date.now(),
      content: newPost,
      application: { ...formData },
    };

    if (editPostId !== null) {
      const updatedPosts = posts.map((post) =>
        post.id === editPostId ? { ...post, ...newPostObject } : post
      );
      setPosts(updatedPosts);
      setEditPostId(null);
    } else {
      setPosts([...posts, newPostObject]);
    }

    setNewPost('');
    setFormData({
      jobName: '',
      education: '',
      location: '',
      salary: '',
    });
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const editPost = (postId) => {
    const postToEdit = posts.find((post) => post.id === postId);
    setNewPost(postToEdit.content);
    setFormData({ ...postToEdit.application });
    setEditPostId(postId);
  };

  return (
    <div className="post-container">
      <div className="box-container">
        <div className="form-container">
          <h2>Jobs</h2>
          <div className="post-form">
            <textarea
              placeholder="Add a new post..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <form>
              <label htmlFor="jobName">Job Name:</label>
              <input
                type="text"
                id="jobName"
                value={formData.jobName}
                onChange={(e) => setFormData({ ...formData, jobName: e.target.value })}
              />
              <label htmlFor="education">Education:</label>
              <input
                type="text"
                id="education"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              />
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
              <label htmlFor="salary">Salary:</label>
              <input
                type="text"
                id="salary"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
              />
            </form>
            <button onClick={addPost}>{editPostId !== null ? 'Update Post' : 'Add Post'}</button>
          </div>
        </div>
        <div className="details-container">
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.id}>
                {post.content}
                <div>
                  <strong>Job Details:</strong>
                  <p>Job Name: {post.application.jobName}</p>
                  <p>Education: {post.application.education}</p>
                  <p>Location: {post.application.location}</p>
                  <p>Salary: {post.application.salary}</p>
                </div>
                <button onClick={() => editPost(post.id)}>Edit</button>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
