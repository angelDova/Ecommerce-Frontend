import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const mainImage = styled.image`
  max-width: 100%;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 5px;
  flex-grow: 0;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? `
      border-color: #ccc;
    `
      : `
      border-color: transparent;
    `}
  height: 40px;
  width: 60px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <Image
          src={activeImage}
          alt="product images"
          sizes="100vw"
          height={0}
          width={0}
          style={{ width: "100%", height: "200px" }}
        />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            active={image === activeImage}
            key={image}
            onClick={() => setActiveImage(image)}
          >
            <Image
              src={image}
              alt="product images"
              sizes="100vw"
              height={0}
              width={0}
              style={{ width: "100%", height: "100%" }}
            />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
