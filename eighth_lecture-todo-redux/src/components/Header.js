import React from 'react'

const Header = () => {
    return (
        <div>
            <header style={styles.header}>
                <h1>React Lecture (08)</h1>
                <h2>subject : React-Redux TODOS App</h2>
                <h4> Lecturer: Asabeneh</h4>
            </header>
        </div>
    )
}
const styles = {
    header: { backgroundColor: '#03454c', color: 'white', textAlign: 'center', padding: 20 }
}
export default Header