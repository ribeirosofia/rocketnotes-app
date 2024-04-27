import { Routes, Route } from 'react-router-dom'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { New } from '../pages/New'
import { Profile } from '../pages/Profile'

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/home/:id" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/new" element={<New />} />
                <Route path="/new/:id" element={<New />} />
                <Route path="/details" element={<Details />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </>

    )
}