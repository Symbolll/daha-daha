import React from "react";

const PromotionDetail = (props) => {

    return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 imgCol">
                        <div className="imgCard">
                            <div className="imgCardBody">
                                <img className="Img" src={props.imageUrl}/>
                                <div className="remainText">
                                    <span>{props.remainingText}</span>
                                </div>
                                <div className="BrandLogo">
                                    <img className="logo" src={props.icon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 descCol">
                        <h2> {props.title} </h2>
                        <div
                            className="description"
                            dangerouslySetInnerHTML={{__html: props.description}}
                        >
                        </div>
                        <button
                            type="button"
                            className="joinBtn"
                        >
                            Hemen Katıl
                        </button>
                    </div>
                </div>
            </div>
    );
}
export default PromotionDetail;