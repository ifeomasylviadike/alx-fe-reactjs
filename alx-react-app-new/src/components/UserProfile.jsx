function UserProfile({ name, age, bio }) {
 return (
    <div>
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p>Age: <span style={{ marginLeft: '10px' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;