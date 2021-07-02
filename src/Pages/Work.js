import React from 'react'
import './Scss/Work.scss'

const img = 'https://cdn.pixabay.com/photo/2017/07/12/08/35/network-2496193__340.jpg'
const img2 = 'https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265046__340.jpg'
const img3 = 'https://cdn.pixabay.com/photo/2017/09/05/10/08/office-2717014__340.jpg'

const Work = () => {
    return (
        <div className="work">
            <div className="work-container">
                <h2>work</h2>
                <h4>Here few more projects.</h4>
                <div className="projects-container">
                    <div className="project-cont-one project">
                        <div className="img-container">
                            <div className="img">
                                <img src={img} alt="img"/>
                                </div> 
                        </div>
                    </div>
                    <div className="project-cont-two project">
                        <div className="img-container">
                            <div className="img">
                                <img src={img2} alt="img"/>
                                </div> 
                        </div>
                        <div className="img-container">
                            <div className="img">
                                <img src={img3} alt="img"/>
                                </div> 
                        </div>
                    </div>
                    <div className="project-cont-three project">
                        <div className="img-container"><div className="img">
                            <img src={img} alt="img"/>
                            </div> </div>
                        <div className="img-container"><div className="img">
                            <img src={img2} alt="img"/>
                            </div> </div>
                        <div className="img-container"><div className="img">
                            <img src={img3} alt="img"/>
                            </div> </div>
                    </div>
                    <div className="project-cont-four project">
                        <div className="img-container">
                            <div className="img">
                                <img src={img2} alt="img"/>
                                </div> 
                        </div>
                        <div className="img-container">
                            <div className="img">
                                <img src={img3} alt="img"/>
                                </div> 
                        </div>
                    </div>
                    <div className="project-cont-five project">
                        <div className="img-container">
                            <div className="img">
                                <img src={img} alt="img"/>
                                </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
