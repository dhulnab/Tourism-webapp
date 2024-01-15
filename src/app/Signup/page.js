"use client";
import Container from "@/Components/Container/Container";
import styles from "./page.module.css";
import img2 from "../../../public/logo_aon_210.png";
import Image from "next/image";
import Form1 from "@/Components/Form/Form1";
import { useState } from "react";
import Button from "@/Components/Button/Button";
import Welcome from "@/Components/Welcome/Welcome";
import Form2 from "@/Components/Form/Form2";
import { useInfo } from "@/globalVars";

function page() {
  const {
    name,
    setName,
    image,
    setImage,
    number,
    setNumber,
    email,
    setEmail,
    password,
    setpassword,
  } = useInfo();
  const [steps, setSteps] = useState(1);
  return (
    <main className={styles.main}>
      <div
        className={styles.progress}
        style={{
          width:
            steps === 1
              ? "33.33%"
              : steps === 2
              ? "66.67%"
              : steps === 3
              ? "100%"
              : "33.33%",
          display: steps > 3 ? "none" : null,
        }}
      ></div>
      <Container>
        <div className={styles.content}>
          {steps != 1 ? (
            <>
              <h3>إنشاء حساب</h3>
              <p>
                انضم إلينا الآن لتستفيد من تجارب سفر لا مثيل لها <br />
                قم بإنشاء حساب جديد وابدأ رحلتك معنا بأسرع
                <br /> وقت ممكن
              </p>
            </>
          ) : null}
          {steps === 1 ? <Welcome /> : steps === 2 ? <Form1 /> : <Form2 />}
        </div>
        {steps === 1 ? (
          <Button
            onClick={() => setSteps(steps + 1)}
            type={"primary"}
            style={{
              width: "90.5%",
              margin: "8px",
              height: "40px",
              fontWeight: "700",
              textAlign: "center",
              marginRight: "17px",
              position: "fixed",
              bottom: "70px",
              left: "10px",
              right: "10px",
            }}
          >
            التالي
          </Button>
        ) : steps === 2 ? (
          <div
            style={{
              position: "fixed",
              bottom: "10px",
              width: "99%",
              right: "0px",
              left: "2px",
            }}
          >
            <Button
              onClick={() => setSteps(steps - 1)}
              type={"primary"}
              style={{
                width: "42%",
                margin: "8px",
                height: "40px",
                fontWeight: "700",
                textAlign: "center",
                marginRight: "17px",
              }}
            >
              السابق
            </Button>

            <Button
              onClick={() => {
                if (name && image !== "") {
                  setSteps(steps + 1);
                }
              }}
              type={"primary"}
              style={{
                width: "42%",
                margin: "8px",
                height: "40px",
                fontWeight: "700",
                textAlign: "center",
                marginRight: "17px",
                backgroundColor: name && image !== "" ? "#00a0b1" : "#009fb18f",
                borderColor: name && image !== "" ? "#00a0b1" : "#fff",
              }}
            >
              التالي
            </Button>
          </div>
        ) : steps === 3 ? (
          <div
            style={{
              position: "fixed",
              bottom: "10px",
              width: "99%",
              right: "0px",
              left: "2px",
            }}
          >
            <Button
              onClick={() => setSteps(steps - 1)}
              type={"primary"}
              style={{
                width: "42%",
                margin: "8px",
                height: "40px",
                fontWeight: "700",
                textAlign: "center",
                marginRight: "17px",
              }}
            >
              {" "}
              السابق
            </Button>

            <Button
              onClick={() => {
                if (name && image !== "") {
                  setSteps(steps + 1);
                }
              }}
              type={"primary"}
              style={{
                width: "42%",
                margin: "8px",
                height: "40px",
                fontWeight: "700",
                textAlign: "center",
                marginRight: "17px",
                backgroundColor:
                  number !== "" && email !== "" && password !== ""
                    ? "#00a0b1"
                    : "#009fb18f",
                borderColor:
                  number !== "" && email !== "" && password !== ""
                    ? "#00a0b1"
                    : "#fff",
              }}
            >
              التالي
            </Button>
          </div>
        ) : null}
        {steps === 1 ? (
          <div className={styles.footer}>
            <p>powered by:</p>
            <div>
              <Image src={img2} alt={"img"} fill />
            </div>
          </div>
        ) : null}
      </Container>
    </main>
  );
}

export default page;
