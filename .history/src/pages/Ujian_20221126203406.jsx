import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase/client";

const Ujian = () => {
    const [ symptoms, setSymptoms] = useState([])

    async function getSymptoms() {
        let { data } = await supabase
            .from('symptom')
            .select('*')
            
        setSymptoms(data)
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
