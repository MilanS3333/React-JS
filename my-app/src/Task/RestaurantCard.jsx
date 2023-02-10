import React, { Component } from 'react'

export default class RestaurantCard extends Component {
    render() {
        return (
            <>
                <div className="col card mx-2">
                    <div>
                        <img className="card-img mt-2" src={this.props.img} alt={this.props.alt} />
                    </div>
                    <div className='mt-5'>
                        <button className='card-title btn btn-primary fw-bold font-monospace' onClick={this.props.btn}>
                            {this.props.name}
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
