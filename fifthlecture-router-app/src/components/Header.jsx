import React from 'react'

const Header = () => {
    return (
        <header style={styles.header}>
            <h1>React Lecture (05)</h1>
            <h2>subject : React Router DOM</h2>
            <h4> Teacher: Asabeneh Yatayeh</h4>
        </header>
    )
}
const styles = {
    header: { backgroundColor: '#03454c', color: 'white', textAlign: 'center', padding: 20 }
}

export default Header;
