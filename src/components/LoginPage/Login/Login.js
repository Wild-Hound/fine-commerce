import React,{useState} from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import {useHistory} from 'react-router-dom'
import 'antd/dist/antd.css'
import CreateAccount from '../CreateAccount/CreateAccount';
import GoogleButton from 'react-google-button'
import GithubButton from 'react-github-login-button'




function Login({setIsAuth,googleSignin,githubSignIn}) {

    //this is used to control modal opening & closing
    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory()

    const onFinish = (values) => {
        console.log('Success:', values);
        setIsAuth(true)
        history.push(history.location.state.from.pathname)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    //this opens & closes modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="loginForm"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        ]}
                    >
                        <Input type='email' />
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

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    {/* create account starts here */}
                        <div>
                            <p>Don't have an account?
                                <span 
                                onClick={showModal}
                                className="createAccountText"
                                >
                                    Create an account
                                </span>
                            </p>
                        </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    <hr/>
                    <div className='instBtnArea'>
                        <GoogleButton
                            onClick={(event) => { googleSignin(event) }}
                            className='w-100'
                        />
                        <GithubButton
                            onClick={(event) => { githubSignIn(event) }}
                            className='w-100'
                        />
                    </div> 
            </Form>
            {/* its not visible on ui because its a modal depanted on isModalVisible state */}
                <CreateAccount 
                isModalVisible={isModalVisible} 
                setIsModalVisible={setIsModalVisible}
                />
                
        </>
    )
}

export default Login
