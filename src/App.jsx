import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { SignIn, SignUp } from './Components'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    )
}

export default App
