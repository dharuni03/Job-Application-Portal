// import  { useState } from 'react';
// import axios from 'axios';
// import '../Style/Delete.css';


// const DeleteUser = () => {
//   const [username, setUsername] = useState('');
//   const [message, setMessage] = useState('');

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/api/v1/auth/${username}`);
//       setMessage(`User ${username} deleted successfully`);
//       console.log(response.data); // If you want to see the response data
//     } catch (error) {
//       setMessage(`Error deleting user ${username}: ${error.response.data}`);
//       console.error('Error deleting user:', error.response.data);
//     }
//   };

//   return (
//     <div>
//       <h2>Delete User</h2>
//       <input
//         type="text"
//         placeholder="Enter username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={handleDelete}>Delete User</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default DeleteUser;
import  { useState } from 'react';
import axios from 'axios';
import '../Style/Delete.css';

const DeleteUser = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/auth/${username}`);
      setMessage(`User ${username} deleted successfully`);
      console.log(response.data); // If you want to see the response data
    } catch (error) {
      setMessage(`Error deleting user ${username}: ${error.response.data}`);
      console.error('Error deleting user:', error.response.data);
    }
  };

  return (
    <div className="delete-user-container">
      <div className="delete-user-form">
        <h2>Delete User</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleDelete}>Delete User</button>
      </div>
      {message && <p className="delete-user-message">{message}</p>}
    </div>
  );
};

export default DeleteUser;
