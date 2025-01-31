class PatternApi {
  static async getAllPatterns() {
    const response = await fetch('http://localhost:3000/api/pattern');
    const allPatterns = await response.json();
    return allPatterns;
  }
}

export default PatternApi;
