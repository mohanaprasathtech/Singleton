class DataService {
    static instance = null; 
    dataArray = [ "Android 5 Lollipop",
    "Android 6 Marshmallow",
    "Android 7 Nougat",
    "Android 8 Oreo",]; 
    constructor() {
      if (!DataService.instance) {
        DataService.instance = this;
      }
      return DataService.instance;
    }
    getArrayData() {
      return this.dataArray;
    }
  }
  
  export default new DataService(); // Exporting singleton instance
  