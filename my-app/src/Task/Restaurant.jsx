import React, { Component } from 'react'
import RestaurantCard from './RestaurantCard'


export default class Restaurant extends Component {
    constructor() {
        super()
        this.state = {
            Coffie1: '',
            Coffie2: '',
            Coffie3: '',
            Coffie4: '',
            breackfast1: '',
            breackfast2: '',
            breackfast3: '',
            breackfast4: '',
            lunch1: '',
            lunch2: '',
            lunch3: '',
            lunch4: '',
            dinner1: '',
            dinner2: '',
            dinner3: '',
            dinner4: ''
        }
    }
    Drink = () => {
        var drink = document.getElementById('drink');
        console.log(drink);
        drink.style.display = 'block';
        this.setState({
            Coffie1: 'Images/food/img_01.jfif',
            Coffie2: 'Images/food/img_02.jfif',
            Coffie3: 'Images/food/img_03.jfif',
            Coffie4: 'Images/food/img_04.jfif'
        })
    }
    BreakFast = () => {
        var drink = document.getElementById('breakfast');
        console.log(drink);
        drink.style.display = 'block';
        this.setState({
            breackfast1: 'Images/food/img_05.jfif',
            breackfast2: 'Images/food/img_06.jfif',
            breackfast3: 'Images/food/img_07.jfif',
            breackfast4: 'Images/food/img_08.jfif'
        })
    }
    Lunch = () => {
        var drink = document.getElementById('lunch');
        console.log(drink);
        drink.style.display = 'block';
        this.setState({
            lunch1: 'Images/food/img_09.jfif',
            lunch2: 'Images/food/img_10.jfif',
            lunch3: 'Images/food/img_11.jfif',
            lunch4: 'Images/food/img_12.jfif'
        })
    }
    Dinner = () => {
        var drink = document.getElementById('dinner');
        console.log(drink);
        drink.style.display = 'block';
        this.setState({
            dinner1: 'Images/food/img_13.jfif',
            dinner2: 'Images/food/img_14.jfif',
            dinner3: 'Images/food/img_15.jfif',
            dinner4: 'Images/food/img_16.jfif'
        })
    }
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row text-center">
                        <RestaurantCard img="Images/food/drink.jfif" alt='Drinks' name='Drinks' btn={this.Drink} />
                        <RestaurantCard img="Images/food/breakfast.jfif" alt='Drinks' name='Breakfast' btn={this.BreakFast} />
                        <RestaurantCard img="Images/food/lunch.jfif" alt='Drinks' name='Lunch' btn={this.Lunch} />
                        <RestaurantCard img="Images/food/dinner.jfif" alt='Drinks' name='Dinner' btn={this.Dinner} />
                    </div>
                </div>
                <div className="container mt-5" id='drink' style={{ display: 'none' }}>
                    <div className="row text-center">
                        <RestaurantCard img={this.state.Coffie1} alt='' name='Order Now' />
                        <RestaurantCard img={this.state.Coffie2} alt='' name='Oreder Now' />
                        <RestaurantCard img={this.state.Coffie3} alt='' name='Order Now' />
                        <RestaurantCard img={this.state.Coffie4} alt='' name='Order Now' />
                    </div>
                </div>
                <div className="container mt-5" id='breakfast' style={{ display: 'none' }}>
                    <div className="row text-center">
                        <RestaurantCard img={this.state.breackfast1} alt='' name='Order Now' />
                        <RestaurantCard img={this.state.breackfast2} alt='' name='Oreder Now' />
                        <RestaurantCard img={this.state.breackfast3} alt='' name='Order Now' />
                        <RestaurantCard img={this.state.breackfast4} alt='' name='Order Now' />
                    </div>
                </div>
                <div className="container mt-5" id='lunch' style={{ display: 'none' }}>
                    <div className="row text-center">
                        <RestaurantCard img={this.state.lunch1} alt='' name='Order Now' />
                        <RestaurantCard img={this.state.lunch2} alt='' name='Oreder Now' />
                        <RestaurantCard img={this.state.lunch3} alt='' name='Order Now' />
                        <RestaurantCard img={this.state.lunch4} alt='' name='Order Now' />
                    </div>
                </div>
                <div className="container mt-5" id='dinner' style={{ display: 'none' }}>
                    <div className="row text-center">
                        <RestaurantCard img={this.state.dinner1} alt='' name='Order Now' />
                        <RestaurantCard img={this.state.dinner2} alt='' name='Oreder Now' />
                        <RestaurantCard img={this.state.dinner3} alt='' name='Order Now' />
                        <RestaurantCard img={this.state.dinner4} alt='' name='Order Now' />
                    </div>
                </div>
            </>
        )
    }
}
