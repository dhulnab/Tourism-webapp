import React from "react";
import SetAvatar from "../Avatar/Avatar";
import Input from "../Input/Input";
import { useInfo } from "@/globalVars";

function Form1() {
  const { setName, name } = useInfo();
  return (
    <div>
      <SetAvatar />
      <Input
        value={name !== "" ? name : null}
        onChange={(e) => setName(e.target.value)}
        placeholder={"الاسم "}
        style={{ width: "90%", marginTop: "15px" }}
      />
    </div>
  );
}

export default Form1;
