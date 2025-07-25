import { useEffect, useState, useContext } from "react";
import { api } from "../Api";
import { AuthContext } from "../Context/AuthContext";

function Profile() {
  const [profile, setProfile] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/profile", {
          headers: { authorization: `Bearer ${user.token}` },
        });
        setProfile(res.data.user);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    if (user?.token) {
      fetchProfile();
    }
  }, [user]);

  return (
    <div className="container">
      {profile ? (
        <div className="card mx-auto shadow-sm" style={{ maxWidth: "500px" }}>
          <div className="card-body text-center">
            <h2 className="card-title text-primary mb-3">
              Welcome!
            </h2>
            <p className="card-text mb-2">
              <strong>Name:</strong> {profile.username}
            </p>
            <p className="card-text mb-2">
              <strong>Role:</strong> {profile.role === "admin" ? (
                <span className="badge bg-danger ms-2">Admin</span>
              ) : (
                <span className="badge bg-secondary ms-2">User</span>
              )}
            </p>
            <p className="card-text">
              <strong>Email:</strong> {profile.email}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-3">Loading profile...</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
