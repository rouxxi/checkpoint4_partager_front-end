import axios from 'axios';

const userSubscribe = (state, history) => {
    axios.post(`${process.env.REACT_APP_URL_BACK}users/register/`,
        state).then((res) => {
        history.push('/')
    })
}


export default userSubscribe;