import { useState } from "react";


export default function Form() {

    const [first, setFirst] = useState("Jhon")
    const [last, setLast] = useState("Doe")

    return (
        <>

            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(first+" "+last);
                setFirst("");
                setLast("");
                
            }} className="grid gap-2 w-[450px] bg-gray-500 rounded-lg m-auto mt-10 p-10">
                <input
                    onChange={(e) => setFirst(e.target.value)}
                    value={first}
                    type="text"
                    placeholder="First Name"
                    className="p-2 text-black" />
                <input
                    onChange={(e) => setLast(e.target.value)}
                    value={last}
                    type="text"
                    placeholder="Last Name"
                    className="p-2 text-black" />
                <input type="submit" className="bg-green-500 p-2 active:opacity-75" />
            </form>

        </>
    )
}