"use client";
import Container from "@/Components/Container/Container";
import styles from "./page.module.css";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import Image from "next/image";
import img from "../../../public/undraw_aircraft_re_m05i.svg";
import img2 from "../../../public/logo aon 210.png";
const page = () => {
  return (
    <main className={styles.main}>
      <Container>
        <h3>تسجيل الدخول</h3>
        <p>
          مرحبًا! سجل دخول واستمتع بتجربة فريدة
          <br />
          ادخل الآن لاستكشاف عوالم جديدة وتجارب مثيرة
        </p>
      </Container>
      <div className={styles.image}>
        <Image src={img} alt={"img"} fill />
      </div>
      <Container>
        <div className={styles.content}>
          <div className={styles.num}>
            <Input
              placeholder={"+964"}
              style={{ width: "23%", marginRight: "5%", marginBottom: "10px" }}
            />
            <Input placeholder={"رقم الهاتف"} style={{ width: "60%" }} />
          </div>
          <Input
            type={"password"}
            placeholder={"كلمة السر"}
            style={{ width: "90%", margin: "8px", marginBottom: "20px" }}
          />
          {}
          <Button
            type={"primary"}
            style={{
              width: "95%",
              margin: "8px",
              height: "40px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            تسجيل الدخول
          </Button>
        </div>
        <div className={styles.footer}>
          <p>powered by:</p>
          <div>
            <Image src={img2} alt={"img"} fill />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default page;
