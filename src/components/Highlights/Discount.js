// import React, { Component } from 'react'
import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {
    state = {
        discountStart:0,
        discountEnd: 30
    }
//  Check with Genghiz about the next line
    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart +1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.percentage()
        }, 30)
    }

    render(){
        return(
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.percentage()}
                        >
                            <div className="discount_percentage">
                                <span>{this.state.discountStart}%</span>
                                <span>OFF</span>
                            </div>
                    </Fade>

                    <Side right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 1st APRIL</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel neque eros. Aliquam nec tristique diam. Suspendisse potenti. Aenean ac ullamcorper eros, eu semper erat. Maecenas viverra tristique justo, ut sodales purus molestie eu. Nulla non consectetur tellus. Aliquam at vehicula lectus. Suspendisse blandit, turpis at egestas finibus, odio enim dapibus diam, sit amet auctor libero mi eu sapien.</p>

                            <MyButton
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="https://duckduckgo.com"
                                />
                        </div>
                    </Side>



                </div>
            </div>
        );
    }
}


export default Discount;