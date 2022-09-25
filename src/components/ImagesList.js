import React from "react";

const ImagesList = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.webformatURL} alt="image" />;
  });
  return (
    <div
      style={{
        position: "relative",
        width: "200x",
        height: "200px",
        display: "grid",
        columnGap: " 50px",
        rowGap: "50px",
        gridTemplateColumns: "auto auto",
        padding: " 50px",
      }}
    >
      {images}
    </div>
  );
};
export default ImagesList;
