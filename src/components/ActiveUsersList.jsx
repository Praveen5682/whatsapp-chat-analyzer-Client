export default function ActiveUsersList({ users = [] }) {
  if (users.length === 0) {
    return <p>No users active for 4 or more days.</p>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
}
