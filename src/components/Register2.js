/* eslint-disable default-case */
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Select } from 'antd';
import { register } from "../redux/actions/auth";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const Register2 = () => {

  const form = useRef();
  //const checkBtn = useRef();
  const [username,] = useState("");
  const [email,] = useState("");
  const [password,] = useState("");
  const [role,] = useState("");
  const [, setSuccessful] = useState(false);
  //const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();


  const onRoleChange = (value) => {
    switch (value) {
      case 'user':
        form.current.setFieldsValue({ note: 'Hi, Simple User!' });
        return;
      case 'rep':
        form.current.setFieldsValue({ note: 'Hey sales rep!' });
        return;
      case 'admin':
        form.current.setFieldsValue({ note: 'Whooo...admin!' });
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.current.resetFields();
  };

  const onFill = () => {
    form.current.setFieldsValue({
      note: "Let's Go!",
      role: 'user',
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    //setSuccessful(false);
    //form.current.validateAll();
    //if (checkBtn.current.context._errors.length === 0) {
    dispatch(register(username, email, password, role))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
    //}
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Form ref={form} {...layout} name="control-ref" onFinish={onFinish}>
          <Form.Item
            style={{ marginBottom: "5px" }}
            name="username" label="UserName" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "5px" }}

            name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "10px" }}
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password style={{ paddingBottm: "0 0 0 0" }} />
          </Form.Item>

          <Form.Item name="role" label="Role" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              onChange={onRoleChange}
              allowClear
            >
              <Option value="user">User</Option>
              <Option value="rep">Sales Rep</Option>
              <Option value="admin">Admin</Option>
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button onClick={handleRegister} type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
};
export default Register2;