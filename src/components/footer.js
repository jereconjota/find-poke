import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <p>®find-pokemon 2021</p>
                </div>
            </div>
        );
    }
}

// export default PokeCard;

//Componente funcional
// function Footer(props) {
//     const children = props.children
//     return (
//         <React.Fragment>
//             {children}
//             <div className="row">
//                 <div className="col-md-12 text-center">
//                     <p>®find-pokemon 2021</p>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }
export default Footer;
