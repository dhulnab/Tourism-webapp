"use client";
import styles from "./Avatar.module.css";
import { useRef } from "react";
import { RxAvatar } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import { useInfo } from "@/globalVars";

const SetAvatar = () => {
  const{image,setImage}=useInfo();
  const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  return (
    <div onClick={handleImageClick}>
      {image ? (
        <div className={styles.parent}>
          <img src={URL.createObjectURL(image)} alt={"no image"} fill />
        </div>
      ) : (
        <div className={styles.img}>
          <RxAvatar className={styles.image1} />
          <div className={styles.box}>
            <LuUpload className={styles.image2} />
          </div>
          <span className={styles.text}>
            الصورة شخصية
          </span>
        </div>
      )}
      <input
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default SetAvatar;
