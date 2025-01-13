'use client';
import { useRef, useState } from 'react';
import classes from './ImagePicker.module.css';
import Image from 'next/image';
const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPicketImage] = useState();
  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (!file) {
      setPicketImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPicketImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The image slected by the user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/jpg, image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
};
export default ImagePicker;
