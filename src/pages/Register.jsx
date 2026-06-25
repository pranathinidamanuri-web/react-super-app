import { useState } from "react";
import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  // 🔴 VALIDATION FUNCTION
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile must be 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // 🔴 SUBMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // stop if invalid

    setUser(formData);

    console.log("Stored User:", formData);

    navigate("/categories");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* NAME */}
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />
      {errors.name && <p>{errors.name}</p>}

      {/* USERNAME */}
      <input
        placeholder="Username"
        value={formData.username}
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
        }
      />
      {errors.username && <p>{errors.username}</p>}

      {/* EMAIL */}
      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
      {errors.email && <p>{errors.email}</p>}

      {/* MOBILE */}
      <input
        placeholder="Mobile"
        value={formData.mobile}
        onChange={(e) =>
          setFormData({ ...formData, mobile: e.target.value })
        }
      />
      {errors.mobile && <p>{errors.mobile}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;