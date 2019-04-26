import React from 'react';
import '../styles/footer.css';
function Footer(props) {
    return(
        <div className='footerWrapper'>
            <div className="footFocus">
                <p>GET IN TOUCH WITH US <strong><i>NOW!</i></strong></p>
                <button>GET STARTED</button>
            </div>
            <div className="tri2"></div>
            <footer>
                <div className="infoItems">
                    <div className="infoItem">
                        <h3>ABOUT US</h3>
                        <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fugit molestias, nostrum voluptas corporis neque.</p>
                        <br /><br />
                        <address>
                            123 Street Name<br />
                            Road Name<br />
                            London<br />
                            +44 2244 54643 223
                        </address>
                    </div>
                    <div className="infoItem">
                        <h3>LATEST TWEETS</h3>
                        <br />
                        <p><span>&copy; Jaynesh</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, voluptas</p>
                        <br />
                        <p><span>&copy; Jaynesh</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, voluptas</p>
                        <p>about 3 weeks ago</p>
                    </div>
                    <div className="infoItem">
                        <h3>LATEST POSTS</h3>
                        <p>Lorem ipsum dolor sit, consectetur</p>
                        <p>Lorem ipsum dolor sit, consectetur</p>
                        <p>Lorem ipsum dolor sit, consectetur</p>
                        <p>Lorem ipsum dolor sit, consectetur</p>
                    </div>
                    <div className="infoItem">
                        <h3>FLICKR</h3>
                        <div className="flickrBoxes">
                            
                        </div>
                    </div>
                </div>
                <div className="lastPart">
                <div className="copyRight">
                    <div className="lastElement1">
                        <p>COPYRIGHT &copy; 2003-2012 VENTUS INC. ALL RIGHTS RESERVED.</p>
                    </div>
                    <div className="lastElement2 Icons">
                        {props.twitterIcon}
                        {props.facebookIcon}
                        {props.gplusIcon}
                        {props.vimeoIcon}
                        
                    </div>
                        <div className="lastElement3 Icons">
                            <i className="fas fa-arrow-alt-circle-up"><a href="#headerImg"></a></i>
                        </div>
                </div>
                    
                </div>
            </footer>
        </div>
    )    
}
export default Footer;