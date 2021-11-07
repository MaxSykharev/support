import React from "react";
import './styles.scss'

export const Loader = () => {

    return (
        <div>
             <div className='container'>
             <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
        </div>
    )
}