import React from "react";
import { useState, useEffect } from "react";
import ColorApi from "../../entities/Color/ColorApi";
import DropDownColors from "../../widgets/DropDownColors/DropDownColors";
import PatternApi from "../../entities/Pattern/PatternApi";
import DropDownPatterns from "../../widgets/DropDownPatterns/DropDownPatterns";
import ImageApi from "../../entities/Image/ImageApi";
import DropDownImages from "../../widgets/DropDownImages/DropDownImages";
import "../HomePage/HomePage";

function GeneratorPage(props) {
  const [colors, setColors] = useState([]);
  const [patterns, setPatterns] = useState([]);
  const [images, setImages] = useState([]);

  async function loadColor() {
    const { data } = await ColorApi.getAllColors();
    setColors(data);
  }

  async function loadPattern() {
    const { data } = await PatternApi.getAllPatterns();
    setPatterns(data);
  }

  async function loadImage() {
    const { data } = await ImageApi.getAllImages();
    setImages(data);
  }

  async function сreatedSockHendler() {
          
              const { data } = await SockApi.createSock()

      }

  useEffect(() => {
    loadColor();
    loadPattern();
    loadImage();
  }, []);

  return (
    <div style={StyleSheet.container}>
      <h1>Генератор носков</h1>
      <div style={StyleSheet.dropdownContainer}>
        <DropDownColors colors={colors} setColors={setColors} />
        <DropDownPatterns patterns={patterns} setPatterns={setPatterns} />
        <DropDownImages images={images} setImages={setImages} />
      </div>
      <button style={StyleSheet.button} type="button" onClick={сreatedSockHendler}>
        <h3>Создать носок</h3>
      </button>
    </div>
  );
}

export default GeneratorPage;
