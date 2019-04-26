import React from 'react';
import '../styles/header.css';

function Header(props) {
    return (
     <div className="headWrapper">
        <header>
            <section className="headSection">
                <div className='headTitle'>
                    <img src={props.headerImg} />
                </div>
                <div className="headTitle">
                    <p><span>POWERFULLY SIMPLE</span> WITH A <span> SQUEEKY CLEAN</span> DESIGN.</p>
                    <p>Find out how you can offer quick and powerful solutions to your customers now!</p>
                    <button> LEARN MORE </button>
                </div>
            </section>
            <div className="headFocus">
                <p>CREATE A <strong>POWERFUL</strong> SOLUTION NOW!</p>
                <button>GET STARTED</button>
            </div>
        </header>
             <div className="borderLine"><img src={props.borderLine} /></div>
             <div className='tri'></div>
    </div>
            )
}
        
export default Header;