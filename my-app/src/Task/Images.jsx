import React, { Component } from 'react'
import './images.css'
import Imgcard from './Imgcard'

export default class Images extends Component {
    constructor() {
        super();
        this.state = {
            image1: 'Images/img_02.jfif',
            image2: 'Images/img_11.jfif',
            image3: 'Images/img_04.jfif',
            image4: 'Images/img_05.jfif',
            image5: 'Images/img_23.jfif',
        }
    }
    btnClick1 = () => {
        this.setState({
            image1: 'Images/img_08.jfif',
            // image2: 'Images/img_03.jfif',
            // image3: 'Images/img_14.jfif',
            // image4: 'Images/img_09.jfif',
            // image5: 'Images/img_22.jfif',
        })
    }
    btnClick2 = () => {
        this.setState({
            // image1: 'Images/img_08.jfif',
            image2: 'Images/img_03.jfif',
            // image3: 'Images/img_14.jfif',
            // image4: 'Images/img_09.jfif',
            // image5: 'Images/img_22.jfif',
        })
    }
    btnClick3 = () => {
        this.setState({
            // image1: 'Images/img_08.jfif',
            // image2: 'Images/img_03.jfif',
            image3: 'Images/img_14.jfif',
            // image4: 'Images/img_09.jfif',
            // image5: 'Images/img_22.jfif',
        })
    }
    btnClick4 = () => {
        this.setState({
            // image1: 'Images/img_08.jfif',
            // image2: 'Images/img_03.jfif',
            // image3: 'Images/img_14.jfif',
            image4: 'Images/img_09.jfif',
            // image5: 'Images/img_22.jfif',
        })
    }
    btnClick5 = () => {
        this.setState({
            // image1: 'Images/img_08.jfif',
            // image2: 'Images/img_03.jfif',
            // image3: 'Images/img_14.jfif',
            // image4: 'Images/img_09.jfif',
            image5: 'Images/img_22.jfif',
        })
    }
    render() {
        return (
            <>
                <div className='container'>
                    <div className="row mb-5">
                        <div className="col">
                            <Imgcard Imgsrc={this.state.image1} number="1" kl={this.btnClick1} />
                        </div>
                        <div className="col">
                            <Imgcard Imgsrc={this.state.image2} number="2" kl={this.btnClick2} />
                        </div>
                        <div className="col">
                            <Imgcard Imgsrc={this.state.image3} number="3" kl={this.btnClick3} />
                        </div>
                        <div className="col">
                            <Imgcard Imgsrc={this.state.image4} number="4" kl={this.btnClick4} />
                        </div>
                        <div className="col">
                            <Imgcard Imgsrc={this.state.image5} number="5" kl={this.btnClick5} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
