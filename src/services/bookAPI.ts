// import axios from "axios";

// export class BookAPI {
//   private readonly BASE_URL = "https://api.itbook.store/1.0";
//   private readonly API = axios.create({
//     baseURL: this.BASE_URL,
//   });
//   private readonly ENDPOINTS = {
//     new: "new",
//     search: "search",
//   };

//   static async getNewBooks() {
//     const { data } = await
//     return data;
//   }

//   static async getBookDetails() {
//     const {} = await this.API.get(this.ENDPOINTS.search);
//   }

//   static async getBookBySearch() {}
// }
export const bookAPI = () => {
  console.log("hello bookAPI");
};
