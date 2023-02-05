import { Outlet } from 'react-router-dom'
import TopNavigation from '../components/Nav'

function RootLayout() {
    return(
        <>
            <TopNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default RootLayout;