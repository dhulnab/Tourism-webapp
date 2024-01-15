import { useState } from "react";
import Input from "../Input/Input";
import { useInfo } from "@/globalVars";

function Form2() {
  const [match, setMatch] = useState("");
  const [check, setCheck] = useState(false);
  const { number, setNumber, email, setEmail, setPassword, Password } =
    useInfo();
  return (
    <div>
      <Input
        placeholder={"+964"}
        style={{
          width: "19.5%",
          marginRight: "5%",
          marginTop: "35px",
          marginBottom: "10px",
          marginLeft: "8px",
          height: "40px",
        }}
      />
      <Input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder={"رقم الهاتف"}
        style={{ width: "60%", height: "40px" }}
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type={"email"}
        placeholder={"البريد الالكتروني"}
        style={{ width: "89.5%", marginTop: "15px", height: "40px" }}
      />
      <Input
        onChange={(e) => setMatch(e.target.value)}
        type={"password"}
        placeholder={"كلمة السر"}
        style={{ width: "89.5%", marginTop: "25px", height: "40px" }}
      />
      <Input
        onChange={(e) => {
          if (e.target.value === match) {
            setPassword(match);
            setCheck(true);
          }
        }}
        type={"password"}
        placeholder={"اعد ادخال كلمة السر"}
        style={{
          width: "89.5%",
          marginTop: "25px",
          height: "40px",
          outline: check !== true && Password != "" ? "red solid 1px" : "none",
        }}
      />
    </div>
  );
}

export default Form2;
