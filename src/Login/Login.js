import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Card,
  CardBody,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import base_url from "../api/bootapi";
import Blue from "./blue";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("All fields are required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMsg("Invalid email format");
      return;
    }

    try {
      const res = await axios.post(`${base_url}/login`, { email, password });
      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
      setErrorMsg("Invalid user");
    }
  };

  return (
    <div>
      <Blue />
      <Card
        className="border rounded px-2 pt-4 pb-4 mx-auto position-absolute bg-white shadow"
        style={{
          top: "220px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          width: "90%",
          maxWidth: "400px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          borderRadius: "15px",
        }}
      >
        <CardBody>
          <h3 className="text-center mb-4">Login</h3>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 px-3"
                style={{ backgroundColor: "#eef5ff", borderRadius: "8px" }}
              />
            </FormGroup>

            <FormGroup className="mt-3">
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 px-3"
                style={{ backgroundColor: "#eef5ff", borderRadius: "8px" }}
              />
            </FormGroup>

            {errorMsg && (
              <Alert color="danger" className="mt-3">
                {errorMsg}
              </Alert>
            )}

            <Button
              color="primary"
              className="mt-4 w-100"
              style={{ borderRadius: "8px" }}
            >
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default LoginPage;
