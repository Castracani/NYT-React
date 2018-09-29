import axios from "axios";
import filterParams from "./filterParams";

export default {
  getArticles: function(params) {
    return axios.get("api/nyt", { params: filterParams(params) });
  }
};

