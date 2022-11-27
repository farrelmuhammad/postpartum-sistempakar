import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase/client";

const Ujian = () => {
    const [ symptoms, setSymptoms] = useState([])
    const [ rules, setRules] = useState([])
    const [ categories, setCategories] = useState([])
    const [ answers, setAnswers] = useState([])

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

    function countCertaintyFactor(categoryId, neededRules) {
        const rules = neededRules.filter(rule => rule.categoryId === categoryId)
        const mbmb = rules.map(rule => rule.mb)
        const mdmd = rules.map(rule => rule.md)

        const tempMb = mbmb.reduce((acc, curr) => acc + (curr * (1 - acc)), 0)
        const tempMd = mdmd.reduce((acc, curr) => acc + (curr * (1 - acc)), 0)

        return tempMb - tempMd
    }

    function submitHandler () {
        const checkedSymtoms = answers.filter(a => a !== false)
        // get rules value for checked symtoms only
        const rulesValue = rules.filter(r => checkedSymtoms.includes(r.symptomId))
        const cfa = countCertaintyFactor(1, rulesValue)
        const cfb = countCertaintyFactor(2, rulesValue)

        console.log('nilai kepastian A: ' + cfa)
        console.log('nilai kepastian B: ' + cfb)
    }

    function clickHandler (id, e, idx) {
        const newAnswers = [...answers]
        newAnswers[idx] = e.target.checked ? id : false
        setAnswers(newAnswers)
    }

    useEffect(() => {
        getSymptoms()
        getRules()
        getCategories()
    }, [])

    useEffect(() => {
        const defaultAnswers = symptoms.map(() => false)
        setAnswers(defaultAnswers)
    }, [symptoms])

    if (symptoms.length > 0) {
        return (
            <>
                { symptoms.map((s, idx) => {
                    return (
                        <div className="my-3" key={idx}>
                            <input type="checkbox" onChange={ (e) => clickHandler(s.id, e, idx) } />
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
