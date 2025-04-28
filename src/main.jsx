import { createRoot } from 'react-dom/client'
import './input.css'
import Nav from './Nav.jsx'
import Form from './Form.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <Nav />
        <Form />
    </>
)
