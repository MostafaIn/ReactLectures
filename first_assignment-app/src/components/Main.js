import React from 'react';
import '../styles/main.css';
function Main(props) {
    return (
        <main>
            <section className="section1">
                <div className="items item1">
                    <div className="icons">
                        {props.mobileIcon}
                    </div>
                    <div className="textPart">
                        <p><strong>SUPERBLY</strong> RESPONSIVE</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                            ipsam sequi facilis optio consequatur ab culpa quia aut
                            reiciendis, ducimus ullam, ...</p>
                    </div>
                    <div className="readMore">
                        <button> READ MORE </button>
                    </div>
                </div>
                <div className="items item2">
                    <div className="icons">
                        {props.desktopIcon}
                    </div>
                    <div className="textPart">
                        <p><strong>SQUEEKY</strong> CLEAN</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                            ipsam sequi facilis optio consequatur ab culpa quia aut
                            reiciendis, ducimus ullam, ...</p>
                    </div>
                    <div className="readMore">
                        <button> READ MORE </button>
                    </div>
                </div>
                <div className="items item3">
                    <div className="icons">
                        {props.laptopIcon}
                    </div>
                    <div className="textPart">
                        <p><strong>MULTI </strong> PURPOSE</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                            ipsam sequi facilis optio consequatur ab culpa quia aut
                            reiciendis, ducimus ullam, ...</p>
                    </div>
                    <div className="readMore">
                        <button> READ MORE </button>
                    </div>
                </div>
                <div className="items item4">
                    <div className="icons">
                        {props.recycleIcon}
                    </div>
                    <div className="textPart">
                        <p><strong>HIGHLY </strong> FLEXIBLE</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                            ipsam sequi facilis optio consequatur ab culpa quia aut
                            reiciendis, ducimus ullam, ...</p>
                    </div>
                    <div className="readMore">
                        <button> READ MORE </button>
                    </div>
                </div>
            </section>
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="borderLine2">
                <img src={props.borderLine2} />
                <p>RECENT WORK</p>
                <img src={props.borderLine2} />
            </div>
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <section className="section2">
                <div className="blogs blog1">
                    <img src={props.blogImg} />
                    <div className="blogTitle">
                        <h4>Blog Title</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                            quam possimus iusto placeat. Ex voluptates, maiores quaerat
                            officia commodi recusandae!
            </p>
                    </div>
                </div>
                <div className="blogs blog2">
                    <img src={props.blogImg} />
                    <div className="blogTitle">
                        <h4>Blog Title</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                            magni voluptates voluptatem voluptas dolore exercitationem animi
                            odit officia omnis quam.
            </p>
                    </div>
                </div>
                <div className="blogs blog3">
                    <img src={props.blogImg} />
                    <div className="blogTitle">
                        <h4>Blog Title</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
                            voluptates repellendus adipisci ratione ipsam deserunt
                            repudiandae. Laudantium voluptates nisi quisquam.
            </p>
                    </div>
                </div>
            </section>
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="borderLine3">
                <img className="longLine" src={props.borderLine2} />
                <p>TESTIMONIALS</p>
                <img className="longLine" src={props.borderLine2} />
                <p></p>
                <img className="shortLine" src={props.borderLine2} />
                <p>DEVELOPMENT</p>
                <img className="shortLine" src={props.borderLine2} />
            </div>
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}


            <section className="section3">
                <div className="testimonials">
                    <div className="johnSmith">
                        <h3>John Smith</h3>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicnostrum, atque minus excepturi aspernatur corporis"</p>
                    </div>
                    <div className="johnSmith">
                        <h3>John Smith</h3>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicnostrum, atque minus excepturi aspernatur corporis"</p>
                    </div>
                    <div className="johnSmith">
                        <h3>John Smith</h3>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicnostrum, atque minus excepturi aspernatur corporis"</p>
                    </div>
                    <div className="johnSmith">
                        <h3>John Smith</h3>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicnostrum, atque minus excepturi aspernatur corporis"</p>
                    </div>
                </div>

                {/* tab content-wrapper */}

                <div className="development">
                    <ul className="tabs">
                        <li>
                            <input type="radio" id="tab1" name="tabs" defaultChecked/>
                            <label htmlFor="tab1">DESIGN</label>
                            <div className="tabContent">
                                <h4>The Design</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Earum exercitationem eius, sapiente pariatur reprehenderit itaque.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime molestiae quas, quidem quos dolore sunt!</p>
                                <a className="firstChild" href="#"> READ ME </a>
                            </div>
                        </li>
                        <li>
                            <input type="radio" id="tab2" name="tabs" />
                            <label htmlFor="tab2">PRODUCTION</label>
                            <div className="tabContent">
                                <h4>The Production</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem eius, sapiente pariatur reprehenderit itaque.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime molestiae quas, quidem quos dolore sunt!</p>
                                <a className="lastChild" href="#"> READ ME </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Main;