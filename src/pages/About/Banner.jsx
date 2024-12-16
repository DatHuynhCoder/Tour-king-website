/**
 * @author Tan Dat
 */

import Image from 'react-bootstrap/Image';

import BannerPic from '../../assets/about_banner.jpg'

import './Banner.scss'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="d-flex justify-content-center">
            <Image src={BannerPic} alt="Banner about" className="banner" fluid />
            </div>
            <div className="banner-content">
                <div className="banner-title">Tour King</div>
                <div className="banner-text">Du lịch thông minh – Trải nghiệm tuyệt vời - Chi phí hợp lý</div>
            </div>
        </div>
    )
}

export default Banner;