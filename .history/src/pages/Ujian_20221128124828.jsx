import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase/client";

const Ujian = () => {
    const [ symptoms, setSymptoms] = useState([])
    const [ rules, setRules] = useState([])
    const [ categories, setCategories] = useState([])
    const [ answers, setAnswers] = useState([])
    const [ certaintyFactors, setCertaintyFactors] = useState([])

    async function getSymptoms() {
        let { data, error } = await supabase
            .from('symptoms')
            .select('*')
            console.log(error)
            
        setSymptoms(data)
    }

    async function getRules() {
        let { data, error } = await supabase
            .from('rules')
            .select('*')
            
        setRules(data)
    }

    async function getCategories() {
        let { data, error } = await supabase
            .from('categories')
            .select('*')
            
        setCategories(data)
    }

    function countCertaintyFactor(categoryId, neededRules) {
        // menyimpan basis pengetahuan yang dibutuhkan (yang symptomsnya di checklist)
        const rules = neededRules.filter(rule => rule.categoryId === categoryId)

        // menyimpan semua mb & md dari basis pengetahuan yang dibutuhkan
        const mbmb = rules.map(rule => rule.mb)
        const mdmd = rules.map(rule => rule.md)

        // rumus menghitung mb md
        const tempMb = mbmb.reduce((acc, curr) => acc + (curr * (1 - acc)), 0)
        const tempMd = mdmd.reduce((acc, curr) => acc + (curr * (1 - acc)), 0)

        // rumus menghitung cf
        return tempMb - tempMd
    }

    function submitHandler () {
        const checkedSymtoms = answers.filter(a => a !== false)
        // get rules value for checked symtoms only
        const rulesValue = rules.filter(r => checkedSymtoms.includes(r.symptomId))

        categories.forEach(category => {
            const cf = countCertaintyFactor(category.id, rulesValue)
            setCertaintyFactors(prev => [...prev, {categoryId: category.id, cf: cf}])
        })
    }

    function clickHandler (id, e, idx) {
        // ketika symptom diklik, ubah nilai default (false) menjadi symptomId
        const newAnswers = [...answers]
        newAnswers[idx] = e.target.checked ? id : false
        setAnswers(newAnswers)
    }

    useEffect(() => {
        // ambil semua data dari supabase (symptom, rule, category)
        getSymptoms()
        getRules()
        getCategories()
    }, [])

    useEffect(() => {
        // ketika symptom sudah didapat dari DB, set nilai default untuk answers menjadi false
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

                { certaintyFactors.length > 0 && (
                    <div>
                        <h1>Hasil</h1>
                        { certaintyFactors.map(cf => (
                                <div key={cf.categoryId}>
                                    <span>penyakit {cf.categoryId} : </span>
                                    <span>{cf.cf}</span>
                                </div>
                            )
                        )}
                    </div>
                ) }
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
