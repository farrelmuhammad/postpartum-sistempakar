import { Avatar, Card, Radio, Skeleton, Switch } from 'antd';
import React, { useState } from 'react'

const TestCard = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);

  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <>
      {/* <Switch checked={!loading} onChange={onChange} /> */}

      <Card
        // style={{
        //   width: 300,
        //   marginTop: 16,
        // }}
        // loading={loading}
      >
        <div class="row content">
          <div class="col-12">
            <h5 class="text-caption-down">Hilangnya nafsu makan atau nafsu makan yang tinggi</h5>
          </div>
          <Radio.Group onChange={onChange}>
            <Radio value={1}>Tidak</Radio>
            <Radio value={2}>Mungkin</Radio>
            <Radio value={3}>Kemungkinan Besar</Radio>
            <Radio value={4}>Hampir Pasti</Radio>
          </Radio.Group>
        </div>
      </Card>

      {/* <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card> */}
    </>
  )
}

export default TestCard