import { ThemeState } from "../App";
import "../Form.css";
import { useContext, useState } from "react";

export default function MyComponent() {
  const context = useContext(ThemeState);
  const { theme } = context;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container cont p-6">
      <div className="row">
        <div className="col-sm-1 col-md-2 col-lg-4"></div>
        <div className="col-sm-10 col-md-8 col-lg-4">
          <form
            style={{
              backgroundColor: theme ? "black" : "skyblue",
              color: theme ? "white" : "black",
            }}
          >
            <h1>Sign up</h1>
            <div id="nameLabel">
              <p>Name:</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.email)}
              />
            </div>
            <div id="nameLabel">
              <p>Email:</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.email)}
              />
            </div>
            <div id="nameLabel">
              <p>Password:</p>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.password)}
              />
            </div>
          </form>
        </div>
        <div className="col-sm-1 col-md-2 col-lg-4"></div>
      </div>
    </div>
  );
}
