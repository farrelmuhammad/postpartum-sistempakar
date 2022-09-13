import { Button, Result } from 'antd';
import React from 'react';

const NotFound = () => (
    <>
        <div className="d-flex justify-content-center mt-3">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button href='/' type="primary">Back Home</Button>}
            />
        </div>
    </>
);

export default NotFound;