import React from 'react'
import Button from 'react-bootstrap/Button'
import './MenuButton.css'


export default function MenuButton({text}) {
    return (
        <Button variant="outline-warning" className="button">{text}</Button>
    )
}
