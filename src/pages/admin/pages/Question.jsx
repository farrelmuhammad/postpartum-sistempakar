import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const Question = () => {
    return (
        <>
            <div className="container shadow-lg p-3 mb-5 bg-body rounded d-flex flex-column">
                <div className="row">
                    <div className="col text-title text-start">
                        <h3 className="title fw-bold">Tally Sheet</h3>
                    </div>
                    <div className="col button-add text-end me-3">
                        {/* <Link to="/tally/buat"> */}
                            <Button
                                type="primary"
                                icon={<PlusOutlined />}
                            />
                        {/* </Link> */}
                    </div>
                </div>
                {/* <TallyTable /> */}
            </div>
        </>
    )
}

export default Question