function UserProfile({ name, age, bio }) {
 return (
    <div style={{ 
      padding: '20px', 
      margin: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;