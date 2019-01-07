import axios from "axios";

export default {
  getRestaurants: function() {
    return  axios.get("https://s3.amazonaws.com/br-codingexams/restaurants.json")
  }
};