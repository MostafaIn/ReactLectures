import React from 'react'
import { Route, NavLink,Switch } from 'react-router-dom';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javacript.png';
import react from '../images/react.webp';

const HTMLpage = props => {
    return (
        <div className='topic'>
            <h3>Let's learn HTML5.</h3>
            <img src={html} alt='html5' />
        </div>
    )
};
const CSSpage = props => {
    return (
        <div className='topic'>
            <h3>Let's learn CSS3.</h3>
            <img src={css} alt='css3' />
        </div>
    )
};
const JavaScriptpage = props => {
    return (
        <div className='topic'>
            <h3>Let's learn JavaScript.</h3>
            <img src={javascript} alt='javascript' />
        </div>
    )
};
const ReactJSpage = props => {
    return (
        <div className='topic'>
            <h3 >Let's learn React JS.</h3>
            <img src={react} alt='react' />
        </div>
    )
};

const Topics = (props) => {
    const path = props.match.path;
    return (
        <div className="topicSection">
            <hr />
            <h4>Topics</h4>
            <ul>
                <li><NavLink to={`${path}/html`}>HTML</NavLink></li>
                <li><NavLink to={`${path}/css`}>CSS</NavLink></li>
                <li><NavLink to={`${path}/javascript`}>JavaScript</NavLink></li>
                <li><NavLink to={`${path}/react`}>ReactJS</NavLink></li>
            </ul>
            <switch>
            <Route path={`${path}/html`} component={HTMLpage} />
            <Route path={`${path}/css`} component={CSSpage} />
            <Route path={`${path}/javascript`} component={JavaScriptpage} />
            <Route path={`${path}/react`} component={ReactJSpage} />
            </switch>
        </div>
    )
};
export default Topics;
