import React from 'react'
import HomePageModal from '../HomePageModal/HomePageModal'
import { Icon } from 'react-icons-kit'
import { plus } from 'react-icons-kit/icomoon/plus'
import './HomePage.css';

function HomePage() {
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div>
            <div id="img-box">
                <div id="container">
                    <div id="background-box">
                        <h5 id="background-text">Nothing scheduled today</h5>
                    </div>
                    <div id="overlay-box" onClick={() => setModalShow(true)}>
                        <div id="icon">
                            <Icon size={20} icon={plus}/>
                        </div>
                        <h5 id="overlay-text">Join or start a meeting</h5>
                    </div>          
                </div>
            </div>
            <HomePageModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default HomePage