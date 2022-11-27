import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase/client";

const Ujian = () => {
    const [ symptoms, setSymptoms] = useState([])

    async function getSymptoms() {
        let { data: symptom, error } = await supabase
            .from('category')
            .select('name')
            
        setSymptoms(symptom)
    }

    useEffect(() => {
        getSymptoms()
    }, [])

    // useEffect(() => {
    //     console.log(symptoms);
    // }, [symptoms])

    if (symptoms.length > 0) {
        return (
            <>
                <p>tes</p>
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
