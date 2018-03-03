import * as types from '../mutation-types'
import userApi from '../../api/user'
// import {Toast} from 'mint-ui'

const TOKEN_EXPIRE = '4002'

const state = {
  token: window.localStorage.token,
	user_info: (window.localStorage.user_info && JSON.parse(window.localStorage.user_info)) || null,
}

const getters = {
  token: state => state.token,
	user_info: state => state.user_info
}

const mutations = {
  [types.SET_TOKEN] (state, token) {
    state.token = token
    window.localStorage.token = token
  },
	[types.SET_USER_INFO] (state, data) {
    if (data && data.customer_name){ // valid user_info
  		state.user_info = data;
  		window.localStorage.user_info = JSON.stringify(state.user_info);
    }
	}
}

const actions = {
  ['set_token'] ({commit}, token) {
    commit('SET_TOKEN', token)
  },
	['GET_USER_INFO'] ({commit}, val) {
		userApi.get_user_info (val)
		.then((response) => {
      if (response.data.code == TOKEN_EXPIRE) {
        commit(types.CLEAR_USER_INFO)

        vue.$router.push({name: 'login'}) // goto login page

        if (os.isAndroid){
          window.control.goto_login();
        }else if (os.isIOS) {
          NativeObject.goto_login();
        }
      } else if (response.data.code != 1){
        alert(response.data.msg)
      }
			commit('SET_USER_INFO', response.data.data)
		})
		.catch( (err) => {
			console.log(err);
		})

	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
