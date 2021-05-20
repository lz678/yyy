import axios from 'axios'
const http=axios.create({
    baseURL:'http://134.175.202.70:3000/'
})
// axios.defaults.baseURL='http://134.175.202.70:3000/'
 
export default http