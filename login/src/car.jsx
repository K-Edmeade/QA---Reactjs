import {useState} from 'react';

const Car = () =>{
    const [brand, setBrand] = useState('BMW');
    const [model, setModel] = useState('M5');
    const [year, setYear] = useState('2022');
    const [colour, setColour] = useState('Red');
return(
    <>
    <div>
        <h2>My car is amazing</h2>
        <p>its a {brand} {model}</p>
        <p>it was made in {year}  and its my favourite colour {colour}</p>
    </div>

    <form>
                 <label> Brand:</label>
                 <input name="brand"
                     type="text"
                     value={brand}
                     onChange={e => setBrand(e.target.value)} />

                 <label> Model:</label>
                 <input name="model"
                     type="text"
                     value={model}
                     onChange={e => setModel(e.target.value)} />

                 <label> Colour:</label>
                 <input name="colour"
                     type="text"
                     value={colour}
                     onChange={e => setColour(e.target.value)} />

                 <label> Year:</label>
                 <input name="year"
                     type="text"
                     value={year}
                     onChange={e => setYear(e.target.value)} />
                 <br />
             </form>
</>
)
}

export default Car;