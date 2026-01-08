import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="dashboard">
        <h1>Welcome to Your Dashboard</h1>

        <div className="user-info">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>User ID:</strong> {user.id}
          </p>
          <p>
            <strong>Role:</strong>
            <span className={`role-badge ${user.role.toLowerCase()}`}>
              {user.role}
            </span>
          </p>
        </div>

        {user.role === "Admin" && (
          <div className="user-info">
            <h3>Admin Features</h3>
            <p>You have administrative privileges</p>
          </div>
        )}

        {user.role === "Customer" && (
          <div className="user-info">
            <h3>Customer Dashboard</h3>
            <p>Welcome to your customer portal</p>
          </div>
        )}

        <button onClick={handleLogout} className="btn logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
