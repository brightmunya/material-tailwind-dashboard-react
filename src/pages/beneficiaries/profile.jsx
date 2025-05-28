const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <p className="text-gray-700 mb-2">Name: John Doe</p>
        <p className="text-gray-700 mb-2">Email: john.doe@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
