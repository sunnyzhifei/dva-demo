import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button } from 'antd';
import { Link, withRouter, routerRedux } from 'dva/router';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }


class IndexPageComponents extends React.Component {

    // componentDidMount(){
    //     api.product()
    //     .then(res => {
    //         console.log(res.data)
    //     })
    // }

    handleAdd = (even) => {
        this.props.dispatch({
            type: 'index/add',
            payload: {
                name: '苹果'
            }
        })
        console.log(this.props)
    }

    handlewithRouter = () => {
        this.props.history.push('/')
    }

    handleRouterRedux = () => {
        this.props.dispatch(routerRedux.push('/'))
    }

    handAddAsync() {
        this.props.dispatch({
            type: 'index/addAsync',
            payload: {
                name: 'junice'
            }
        })
    }

    handAddHttp() {
        this.props.dispatch({
            type: 'index/addHttp',
            payload: {
                id: 1001
            }

        })
    }


    handleLogin = () => {
        this.props.dispatch({
            type: 'index/login',
            payload: {
                email: '515446594@qq.com',
                password: 'L1235678'
            }

        })
    }


    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
        document.title = '登录'
      }
    
    handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
        this.props.dispatch({
            type: 'index/login',
            payload: values
        })
        }
    });
    console.log(this.props)
    this.handleIsLogin();
    }
    
    handleIsLogin = () => {
        const { user } = this.props.productList;
        console.log(this.props);
        if (user.isLogin == 'true'){
            this.props.history.push('/');
        } else {
            console.log('未登录');
        }
    }

    render() {
        const { productList, user } = this.props.productList
        // console.log(user)
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        // console.log(this.props.dispatch)
        return (
            <div>
                用户登录情况：{user.isLogin}
                {/* Product:{this.props.title} */}
                {/* <ul>
                    {productList.map((ele, index) => {
                        return <li key={index}> {ele.name} </li>
                    }
                    )}
                </ul> */}
                {/* <button onClick={this.handleAdd}>新增商品</button>
                <button onClick={this.handAddAsync.bind(this)} >异步增加商品</button><br />
                <button onClick={this.handAddHttp.bind(this)} >HTTP增加商品</button><br />

                <Link to='/'> Link首页</Link>
                <button onClick={this.handlewithRouter}>withRouter首页</button>
                <button onClick={this.handleRouterRedux}>routerredux首页</button><br />
                <button onClick={this.handleLogin}>登录</button> */}
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Email"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                            Log in
                    </Button>
                    </Form.Item>
                </Form>
                <button onClick={this.handleIsLogin}>判断是否登录并跳转首页</button>
            </div>
        )
    };
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(IndexPageComponents);

// ReactDOM.render(<WrappedHorizontalLoginForm />, '#root');


class IndexPageComponent extends React.Component{
    render() {
        // console.log(this.props)
        return(
            <WrappedHorizontalLoginForm {...this.props} />
        )
    }
}

export default withRouter(IndexPageComponent);