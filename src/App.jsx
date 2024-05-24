import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { SignIn, SignUp, Home } from './Pages'

import { Header, Footer } from './Components'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WithComp><Home /></WithComp>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    )
}

const WithComp = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default App
