import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Api";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      login(res.data);
      navigate("/profile");
    } catch {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-primary mb-4">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto"
        style={{ maxWidth: "400px" }}
      >
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            placeholder="Enter email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            placeholder="Enter password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
