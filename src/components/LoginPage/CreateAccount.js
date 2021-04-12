import React from 'react'
import "antd/dist/antd.css";
import { Modal,Form, Input, Button, Checkbox } from "antd";

function CreateAccount({isModalVisible, setIsModalVisible}) {
    const [form] = Form.useForm();

    //these are modal functions
    const handleOk = () => {
        // setIsModalVisible(false)
        form.submit()
    };

    const handleCancel = () => {
        setIsModalVisible(false)
    };

    //these are form functions
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Modal
        title="Create Account"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        //this is to hide the buttons
        okButtonProps={{
          style: {
            display: "none",
          },
        }}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
         <Form
        name="basic"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item  name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item >
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
      </Modal>
    )
}

export default CreateAccount
