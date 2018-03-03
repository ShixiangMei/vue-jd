import axios from 'axios'
import app from '../config/app'

export default {

	get_user_info: function () {
		return axios.get(app.API_BASE_URL + '/v1/my/info', {
			params: {
        token: vue.$store.getters.token
      },
		})
	}
}
