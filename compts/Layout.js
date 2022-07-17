import {xNav} from './Nav';






const Layout = ({ children }) => {
    return (
        <div>
            <xNav />
            {children}
        </div>

    )



}


export default Layout;