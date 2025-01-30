class PatternApi {
  static async getAllPatterns() {
    const response = await fetch("/api/patterns");
    const allPatterns = await response.json();
    return allPatterns;
  }
}

export default PatternApi;
