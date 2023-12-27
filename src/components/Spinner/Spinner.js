import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import "./Spinner.css"


export default function SpinnerComponent() {
    return (
        <div className='spinner'>
            <Spinner animation="border" role="status" variant="success" />
        </div>
    )
}
