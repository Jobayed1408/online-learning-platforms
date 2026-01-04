import { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, updateUserProfile } = use(AuthContext);

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    photo: user?.photoURL || "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // 🔹 send data to backend
    console.log(formData);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-lg shadow p-8">
      {/* Header */}
      <div className="flex items-center gap-6 border-b pb-6">
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-indigo-500"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.displayName}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleUpdate} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="input input-bordered w-full mt-1 "
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            placeholder="01XXXXXXXXX"
            value={formData.phone}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
          />
        </div>

        {/* Button */}
        {/* <div className="md:col-span-2">
          <button className="btn btn-primary w-full md:w-48">
            Update Profile
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Profile;
