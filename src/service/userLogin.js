import axios from 'axios';

const userLogin = (state) => {
    axios.post(`${process.env.REACT_APP_URL_BACK}users/login/`,
        state
    ).then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.user.iduser);

    })
}


export default userLogin;