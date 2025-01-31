class ColorApi {
  static async getAllColors() {
    const response = await fetch("http://localhost:3000/api/color");
    const allColors = await response.json();
    return allColors;
  }
}

export default ColorApi;
