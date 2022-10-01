import React from "react";
import { images } from "../../constants";
import "./Instagram.scss";

function Instagram() {
  return (
    <div className="app__instagram">
      <div className="app__container">
        <div className="section__padding">
          <div className="dash" />
          <div className="app__instagram-content">
            <div className="app__instagram-content_images">
              <div className="app__instagram-content_images-img">
                <img src={images.instagram1} alt="images" />
                <img
                  className="app__instagram-content_images-icon"
                  src={images.instagramLogo}
                  alt="instagram logo"
                />
              </div>
              <div className="app__instagram-content_images-img">
                <img src={images.instagram2} alt="images" />
                <img
                  className="app__instagram-content_images-icon"
                  src={images.instagramLogo}
                  alt="instagram logo"
                />
              </div>
            </div>

            <div className="app__instagram-content_followMe">
              <p className="app__instagram-content_followMe-text">
                Follow me on
              </p>
              <button className="custom__btn">Instagram</button>
            </div>

            <div className="app__instagram-content_images">
              <div className="app__instagram-content_images-img">
                <img src={images.instagram3} alt="images" />
                <img
                  className="app__instagram-content_images-icon"
                  src={images.instagramLogo}
                  alt="instagram logo"
                />
              </div>
              <div className="app__instagram-content_images-img">
                <img src={images.instagram4} alt="images" />
                <img
                  className="app__instagram-content_images-icon"
                  src={images.instagramLogo}
                  alt="instagram logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instagram;
