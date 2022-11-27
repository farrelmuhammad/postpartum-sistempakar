import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase/client";

const Ujian = () => {
    const [ symptoms, setSymptoms] = useState([])

    const defaultAnswers = symptoms.map((s) => 0);
    const [ answers, setAnswers] = useState(defaultAnswers)
    
    async function getSymptoms() {
        let { data, error } = await supabase
            .from('symptom')
            .select('name')
            
        setSymptoms(data)
    }

    function submitHandler () {
        console.log(answers)
    }

    function clickHandler (e, idx) {
        const newAnswers = [...answers]
        newAnswers[idx] = e.target.value
        setAnswers(newAnswers)
    }

    useEffect(() => {
        getSymptoms()
    }, [])

    if (symptoms.length > 0) {
        return (
            <>
                { symptoms.map((s, idx) => {
                    return (
                        <div className="my-3">
                            <input type="checkbox" onChange={ (e) => clickHandler(e, idx) } />
                            <label>{s.name}</label>
                        </div>
                    )
                }) }
                <button onClick={ submitHandler }>Kirim</button>
            </>
        )
    } else {
        return (
            <>
                <p>loading</p>
            </>
        )
    }
};

export default Ujian;
