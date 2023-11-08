import { useState } from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import "./style.scss";
import { registerRequest } from "../../requests/user";
function Register() {
  const [inputValues, setInputValues] = useState<{ [x: string]: string }>({});

  function handleFormSubmit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (!inputValues?.email || !inputValues?.password) return;
    const data = {
      email: inputValues.email,
      password: inputValues.password,
    };
    registerRequest(data);
    setInputValues({});
  }
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <Navbar />
      <h1>Rejestracja</h1>
      <form>
        <Input
          name="email"
          size="m"
          label="Email"
          type="text"
          placeholder="cleaner@witaj.com"
          value={inputValues?.email || ""}
          onChange={handleInputChange}
        />
        <Input
          name="password"
          size="m"
          label="Hasło"
          type="password"
          placeholder="*******"
          value={inputValues?.password || ""}
          onChange={handleInputChange}
        />
        <Button size="m" onClick={handleFormSubmit}>
          Załóż konto
        </Button>
      </form>
    </div>
  );
}

export default Register;
