import React, { PropTypes } from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './UserSearch.less';

const UserSearch = ({
  field, keyword,
  onSearch,
  onAdd,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    },
  }) => {
  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      onSearch(getFieldsValue());
    });
  }

  return (
    <div className={styles.normal}>
      <div className={styles.search}>
        <Form inline onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('field', {
              initialValue: field || 'name',
            })(
              <Select>
                <Select.Option value="name">name &nbsp; </Select.Option>
                <Select.Option value="address">address &nbsp; </Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item
            hasFeedback
          >
            {getFieldDecorator('keyword', {
              initialValue: keyword || '',
            })(
              <Input type="text" />
            )}
          </Form.Item>
          <Button style={{ marginRight: '10px' }} type="primary" htmlType="submit">Search</Button>
        </Form>
      </div>
      <div className={styles.create}>
        <Button type="ghost" onClick={onAdd}>Add</Button>
      </div>
    </div>
  );
};

UserSearch.propTypes = {
  form: PropTypes.object.isRequired,
  onSearch: PropTypes.func,
  onAdd: PropTypes.func,
  field: PropTypes.string,
  keyword: PropTypes.string,
};

export default Form.create()(UserSearch);
