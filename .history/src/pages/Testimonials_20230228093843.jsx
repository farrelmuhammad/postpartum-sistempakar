import { Card } from 'antd'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import supabase from '../utils/supabase/client'

const Testimonials = () => {

    const questions = [
        {
            id: 1,
            question: 'Apakah tampilan mudah digunakan?',
        },
        {
            id: 2,
            question: 'Apakah anda mengalami batuk?',
        },
    ]

    const answer = [
        {
            id: 1,
            answer: 1,
        },
        {
            id: 2,
            answer: 2,
        },
        {
            id: 3,
            answer: 3,
        },
        {
            id: 4,
            answer: 4,
        },
        {
            id: 5,
            answer: 5,
        },
    ]

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
                <div className="row content">
                    <div className="col-12">
                        <h4 className="text-caption-up">
                            <b>Testimonials</b>
                        </h4>
                    </div>
                    <div className="">
                        <Card
                            style={{
                                marginTop: 10,
                            }}
                        // loading={loading}
                        >
                            <div className="d-flex justify-content-center">
                            </div>
                            {questions?.map((s, idx) => {
                                return (
                                    <div className="m-3" key={idx}>
                                        {s.question}
                                        {/* <Checkbox onChange={(e) => clickHandler(s.id, e, idx)}>
                                            {s.name}
                                        </Checkbox> */}
                                    </div>
                                );
                            })}
                        </Card>
                    </div>
                    <div className="d-flex justify-content-center">
                        {/* <Button
                            type="primary"
                            className="d-block w-100 mt-3 mb-2"
                            size="large"
                            loading={loadings[1]}
                            onClick={() => enterLoading(1)}
                        >
                            Periksa
                        </Button> */}
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Testimonials