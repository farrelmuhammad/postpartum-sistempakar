import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase/client";

const Ujian = () => {
    const [ symptoms, setSymptoms] = useState([])
    const [ rules, setRules] = useState([])
    const [ categories, setCategories] = useState([])
    const [ answers, setAnswers] = useState([])

    function getValue(value) {
        // if (value == "on") return true
        // return false
        return value
    }
    
    async function getSymptoms() {
        let { data, error } = await supabase
            .from('symptom')
            .select('*')
            
        setSymptoms(data)
    }

    async function getRules() {
        let { data, error } = await supabase
            .from('rule')
            .select('*')
            
        setRules(data)
    }

    async function getCategories() {
        let { data, error } = await supabase
            .from('category')
            .select('*')
            
        setCategories(data)
    }

    function submitHandler () {
        console.log(answers)
    }

    function clickHandler (e, idx) {
        // const newAnswers = [...answers]
        // newAnswers[idx] = getValue(e.target.value)
        // setAnswers(newAnswers)
        console.log(e.checked)
    }

    useEffect(() => {
        getSymptoms()
        getRules()
        getCategories()
    }, [])

    useEffect(() => {
        const defaultAnswers = symptoms.map(() => 0)
        setAnswers(defaultAnswers)
    }, [symptoms])

    if (symptoms.length > 0) {
        return (
            <>
                { symptoms.map((s, idx) => {
                    return (
                        <div className="my-3" key={idx}>
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
