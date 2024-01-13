"use client";
import Container from "@/Components/Container/Container";
import styles from "./page.module.css";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import Image from "next/image";
import img from "../../../public/undraw_aircraft_re_m05i.svg"

const page = () => {
  return (
    <main className={styles.main}>
    <Container>
      <h3>تسجيل الدخول</h3>
      <p>مرحبًا! سجل دخول واستمتع بتجربة فريدة <br/>
         ادخل الآن لاستكشاف عوالم جديدة وتجارب مثيرة,</p>
    </Container>
    <div className={styles.image}>
      <Image 
      src={img}
      alt={"img"}
      fill
      />
    </div>
      <Container>
        <div className={styles.content}>
          <Input placeholder={"+964"} style={{ width: "20%", margin: "8px" }} />
          <Input
            placeholder={"رقم الهاتف"}
            style={{ width: "60%", margin: "8px" }}
          />
          <Input
            type={"password"}
            placeholder={"كلمة السر"}
            style={{ width: "90%", margin: "8px" }}
          />
          <Button
            type={"primary"}
            style={{
              width: "95%",
              margin: "8px",
              height: "40px",
              fontWeight: "700",
            }}
          >
            تسجبل الدخول
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default page;
