import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

export const Home: React.FC = () => {
    return (
        <>
            <Select
            showSearch
            style={{width: 200}}
            placeholder="Choose some stock"
            optionFilterProp="value"
            filterOption={true}
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
        </>   
    )
}