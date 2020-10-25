import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

const Home: React.FC = () => (
  <>
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Choose some stock"
      optionFilterProp="value"
      filterOption
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option>
    </Select>
  </>
);

export default Home;
