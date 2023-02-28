import React from 'react'
import Navbar from '../components/Navbar'
import supabase from '../utils/supabase/client'

const Testimonials = () => {

    const createTestimonial = async () => {
        const { data, error } = await supabase
            .from('testimonials')
            .insert([
                { some_column: 'someValue', other_column: 'otherValue' },
            ])
    }
    
    return (
        <>
            <div className="container-xxl mx-auto p-0  position-relative header-2-1">
                <Navbar />
            </div>
            <div className="container text-center">
                <div>Testimonials</div>
            </div>
        </>
    )
}

export default Testimonials