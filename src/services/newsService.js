
import axios from "axios";
import { Endpoints } from "../constants/endpoints";



export default class NewsService {

  apiUrl = Endpoints.topHeadLinesWithApiKey

  getNewsByPage(page: number, pageSize: number): Observable<ArticleResponseModel>{
    return axios.get(this.apiUrl + "&page=" + page + "&pageSize=" + pageSize);
  }

}