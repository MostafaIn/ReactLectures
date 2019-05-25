import React from 'react'

const Header = () => {
    return (
        <div>
            <header style={styles.header}>
                <h1>React Lecture (07)</h1>
                <h2>subject : Introduction to React-Redux</h2>
                <h4> Lecturer: Asabeneh</h4>
            </header>
        </div>
    )
}
const styles = {
    header: { backgroundColor: '#03454c', color: 'white', textAlign: 'center', padding: 20 }
}
export default Header
