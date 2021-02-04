import axios from 'axios';

const userSubscribe = (state) => {
    axios.post(`${process.env.REACT_APP_URL_BACK}users/register/`,
        state).then((res) => console.log(res))
}


export default userSubscribe;