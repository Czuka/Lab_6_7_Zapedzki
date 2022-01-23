import React from "react"
import './CFooter.css';



/* 
export const CFooter = () => {
    let date = new Date();
    return React.createElement('div',{className: 'footerDivClass'},
    React.createElement('h5',{id: 'footerText', className: 'footerTextClass'},
    'PPFrontEnd, przykładowy serwis React. Dzisiaj mamy: '+date.toDateString())) ;  
}
*/

//export default CFooter

/*

function CFooter(){
    let date = new Date();

return (
    <div>
        <h5>PPFrontEnd,przykładowy serwis React. Dzisiaj mamy: {date.toDateString()} </h5>

    </div>
);    
}

*/

/** 
*/
export const CFooter = (props) => {
    const {weather, temp, children} = props;
    let date = new Date();

return ( 
    <div className="footerDivClass">
        <h5 className="footerTextClass">
            PPFrontEnd,przykładowy serwis React. Dzisiaj mamy: {date.toDateString()} 
            <br/>
            Stan pogody: {weather}, temperatura: {temp}.
            <br/>
            {children}
        </h5>
    </div>
);    
}
 

