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
                <div className="banner-title">Tour_king</div>
                <div className="banner-text">Website đặt vé máy bay số một thế giới</div>
            </div>
        </div>
    )
}

export default Banner;