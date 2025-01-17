import { useState, useRef } from "react";
import { useSignUpS } from "../hooks/useSignUpS";
import { useNavigate } from "react-router-dom";

const SignUpS = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const { signup, error, isLoading } = useSignUpS();

  const rName = useRef();
  const rPhone = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[A-Za-z ]+$/.test(name)) {
      alert("Only characters are allowed");
      setName("");
      rName.current.focus();
      return;
    } else if (name.trim().length < 2) {
      alert("More than two characters needed");
      setName("");
      rName.current.focus();
      return;
    }
    if (phone.length > 10) {
      alert("Invalid Phone Number");
      setPhone("");
      rPhone.current.focus();
      return;
    }
    await signup(name, email, password, location, dob, gender, phone, interest);
  };

  const navigate = useNavigate();
  function submitForm() {
    navigate("/user/generic_stories");
  }

  return (
    <form className="signup">
      <h3>Sign Up For Swarozgar</h3>
      <label>Full Name:</label>
      <input
        type="text"
        ref={rName}
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />
      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <label>Location:</label>
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        required
      />
      <label>DOB:</label>
      <input
        type="date"
        onChange={(e) => setDob(e.target.value)}
        value={dob}
        required
      />
      <label>Gender:</label>
      <div>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "male"}
          required
        />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "female"}
          required
        />
        <label htmlFor="female">Female</label>
      </div>
      <br />
      <br />
      <label>Phone Number:</label>
      <input
        type="number"
        ref={rPhone}
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        required
      />
      <label>Interest:</label>
      <input
        type="text"
        onChange={(e) => setInterest(e.target.value)}
        value={interest}
        required
      />
      <center>
        <button onClick={submitForm} disabled={isLoading}>
          Sign up
        </button>
        {error && <div className="error">{error}</div>}
      </center>
    </form>
  );
};

export default SignUpS;
