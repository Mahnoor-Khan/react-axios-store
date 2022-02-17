
import axios from 'axios'

class Todo extends BaseApi {
 
  getTodo = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/`,)
      return response.data
    } catch (error) {
      throw Promise.reject(error)
    }
  }

}
export default Todo