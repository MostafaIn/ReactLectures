import React from 'react'
import { Route, NavLink } from 'react-router-dom';

const HTMLpage = props => {
    return (
        <div>
            <h3>Let's learn HTML5.</h3>
        </div>
    )
};
const CSSpage = props => {
    return (
        <div>
            <h3>Let's learn CSS3.</h3>
        </div>
    )
};
const JavaScriptpage = props => {
    return (
        <div>
            <h3>Let's learn JavaScript.</h3>
        </div>
    )
};
const ReactJSpage = props => {
    return (
        <div>
            <h3>Let's learn React JS.</h3>
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
            <Route path={`${path}/html`} component={HTMLpage} />
            <Route path={`${path}/css`} component={CSSpage} />
            <Route path={`${path}/javascript`} component={JavaScriptpage} />
            <Route path={`${path}/react`} component={ReactJSpage} />
        </div>
    )
};

export default Topics;
