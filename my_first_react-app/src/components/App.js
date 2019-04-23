import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
const App= () => {
    return (<div>
        <Header
            const content="Let's start with React"
            const firstName="Asabeneh"
            const lastName="Yatayeh"
            const year={new Date().getFullYear()}

        />
        <Main
            const skills={['HTML', 'CSS', 'JAVASCRIPT', 'REACT']}
        />
        <Footer />
    </div>)
}
export default App;