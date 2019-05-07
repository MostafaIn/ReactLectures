import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
const SecondApp = () => {
    const style={
        fontSize: 40
    }
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
        timeOfDay = 'Good Morning'
    } else if (hours <= 12 && hours >= 17) {
        timeOfDay = 'Good afternoon'
    } else {
        timeOfDay = 'Good Night'
    }
    return (
        <div>
            <Header />
            <MainContent />
            {timeOfDay}
            <Footer />
        </div>
    )
}
export default SecondApp;