import React, { Component } from 'react'

export default class Imgcard extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="row">
                        <div className="col mb-3" style={{ height: "300px" }}>
                            <img src={this.props.Imgsrc} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="card-body row">
                        <p className='col my-auto'>Img {this.props.number}</p>
                        <button className="btn btn-primary col" onClick={this.props.kl}>Change</button>
                    </div>
                </div>
            </>
        )
    }
}
