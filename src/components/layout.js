import React from "react";
import Footer from "./footer.js"

//Componente funcional
function Layout(props) {
    const children = props.children
    return (
        <React.Fragment>
            {children}
            <Footer></Footer>
        </React.Fragment>
    );
}
export default Layout;
