import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase/client";

const Ujian = () => {
    const [ symptoms, setSymptoms] = useState([])

    async function getSymptoms() {
        let { data, error } = await supabase
            .from('symptom')
            .select('name')
            
        setSymptoms(data)
    }

    useEffect(() => {
        getSymptoms()
    }, [])

    if (symptoms.length > 0) {
        return (
            <>
                { symptoms.map(s => {
                    return (
                        <div className="my-3">
                            <input type="checkbox" id="" />
                            <label>{s.name}</label>
                        </div>
                    )
                }) }
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
