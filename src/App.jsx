import Nav from './components/Nav.jsx'
import Form from './components/Form.jsx'
import Card from './components/Card.jsx';

export default function App() {

    const user = [
        {
          "name": "Ali Khan",
          "age": 28,
          "profession": "Software Engineer"
        },
        {
          "name": "Sara Ahmed",
          "age": 32,
          "profession": "Doctor"
        },
        {
          "name": "Zain Raza",
          "age": 24,
          "profession": "Graphic Designer"
        },
        {
          "name": "Fatima Noor",
          "age": 29,
          "profession": "Teacher"
        },
        {
          "name": "Umar Siddiqui",
          "age": 35,
          "profession": "Civil Engineer"
        },
        {
          "name": "Ayesha Malik",
          "age": 27,
          "profession": "Content Writer"
        },
        {
          "name": "Bilal Qureshi",
          "age": 30,
          "profession": "Photographer"
        },
        {
          "name": "Hina Shah",
          "age": 31,
          "profession": "Architect"
        },
        {
          "name": "Yasir Mehmood",
          "age": 26,
          "profession": "Marketing Specialist"
        },
        {
          "name": "Nida Javed",
          "age": 33,
          "profession": "Lawyer"
        }
      ];
      

    return (
        <>
            <Nav />
            <Form />
            <div className='flex flex-wrap'>
                {user.map((elm, id) => {
                    return <Card 
                    keys={id}
                    name={elm.name}
                    age={elm.age}
                    profession={elm.profession} />
                })}
            </div>
        </>
    )
}
