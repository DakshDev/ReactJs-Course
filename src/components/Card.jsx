


export default function Card(props){
    return (
        <>
            <div className="p-5 m-5 rounded-lg bg-gray-500 grid gap-2 text-center w-[150px]">
                <h2>{props.name}</h2>
                <h3>{props.age}</h3>
                <h4>{props.profession}</h4>
            </div>
        </>
    )
}