import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from "./HomeComponent"; 
import Menu from './MenuComponent';
import Dishdetail from "./DishdetailComponent ";
import { DISHES } from "../shered/dishes";
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);
    this.state ={
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Menu dishes={this.state.dishes} 
         onClick={(dishId)=> this.onDishSelect(dishId)}/>
        <Dishdetail 
          dish={this.state.dishes.filter((dish)=> dish.id=== this.state.selectedDish)[0]} />
        <Footer/>
      </div>
    );
  }
}

export default Main;
