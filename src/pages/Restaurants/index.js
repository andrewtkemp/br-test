import React, { Component } from "react";
import API from "../../utils/API";
import List from "../../components/List";
import "./style.css"
export default class Restaurants extends Component {
  state = {
    restaurants: [],
    test:{}
  };

  componentDidMount() {
    this.loadRestaurants();
  }

  loadRestaurants = () => {
    API.getRestaurants().then((response)=>{
      this.setState({
        restaurants:response.data.restaurants,
        test:response.data.restaurants[0]
      })
    })
  };

  render() {
    return (
        <div className="container">
            {this.state.restaurants.length ? (
              <List content={this.state.restaurants}/>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
    )
  }
}