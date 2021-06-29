import React,{useState} from 'react'
import { FormTop } from './Component/FormTop'

export default function App() {
const [formBuilder,setFormBuilder]=useState([]);
const updateFormBuilder=eachEntry =>{
    setFormBuilder([...formBuilder,eachEntry]);
};

    return (
        <div className="container mt-4" >
           <FormTop updateFormBuilder={updateFormBuilder} />

        </div>
    )
}
