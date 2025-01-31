class ImageApi {
    static async getAllImages() {
      const response = await fetch('http://localhost:3000/api/Image');
      const allImages = await response.json();
      return allImages;
    }
  }
  
  export default ImageApi;