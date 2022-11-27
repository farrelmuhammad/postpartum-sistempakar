import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase/client";

const Ujian = () => {
    const [ symptoms, setSymptoms] = useState([])

    function getSymptoms() {
        supabase
            .from('symptoms')
            .select('*')
            .then(({ data }) => {
                setSymptoms(data)
            })
    }

    useEffect(() => {
        getSymptoms()
    }, [])

    useEffect(() => {
        console.log(symptoms);
    }, [symptoms])

    if (!!symptoms) {
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
