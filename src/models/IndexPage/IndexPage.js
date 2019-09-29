import * as api from '../../services/products'

export default {
    namespace: 'index',
    state: {productList: [
        { name: 'dva'},
        { name: 'antd'}
    ]
    },
    reducers: {
        add(state,action) {
            return {...state, ...state.productList.push(action.payload)}
        }
    },

    effects: {
        *addAsync({ payload }, { call, put }) {  // eslint-disable-line
          yield put({ 
            type: 'add',
            payload
         });
        },
        
        *login({payload}, {call,put}) {
            // console.log(payload)
            const res = yield call(api.login,payload);
            const access_tocken = res.access;
            const refresh_tocken = res.refresh;
            // console.log(access_tocken);
            let storage=window.localStorage;
            storage['access_tocken'] = '';
            storage['refresh_tocken'] = '';
            storage.setItem('access_tocken',access_tocken)
            storage.setItem('refresh_tocken',refresh_tocken)

            const resusers = yield call(api.getusers,access_tocken)
            const users = resusers.results
            console.log(users)
        },


        *addHttp({ payload }, { call, put }) {
            // 网络请求
            console.log(payload)
            const result = yield call(api.product,payload);
            const data = result.data;
            if (data){
                yield put ({
                    type: 'add',
                    payload: data
                })
            };
        },
    },

    subscriptions: {
        setup({ dispatch , history}) {
            window.onresize = () => {
                dispatch({
                    type: 'add',
                    payload: {
                        name: '订阅'
                    }
                })
            }
        },
        setupHistory({dispatch, history}){
            history.listen((location) => {
                console.log(location)
            })

        }
    }
}
