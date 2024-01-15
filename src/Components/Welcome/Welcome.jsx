import Image from "next/image";
import styles from "./Welcome.module.css";
import img from "../../../public/undraw_stranded_traveler_pdbw.svg";

function Welcome() {
  return (
    <div >
      <div className={styles.content}>
        <h3>يا هلا</h3>
        <p>
          مرحبًا بك في تطبيق رحلات <br/>المكان الذي يمكّنك من اكتشاف جمال العراق وما
          وراءه <br/>انضم إلينا لتصبح جزءًا من مجتمع يربط بين المسافرين وشركات
          السياحة<br/> اختر رحلتك، احجز بسهولة، وشارك تجاربك، لنبني سويًا رحلات
          تمتلك طابعًا ثقافيًا استثنائيًا
        </p>
        <div className={styles.img}>
          <Image src={img} alt={"none"} fill />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
