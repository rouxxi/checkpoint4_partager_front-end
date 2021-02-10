import axios from 'axios';

const userLogin = (state, history, setUserInfo, userInfo) => {
    axios.post(`${process.env.REACT_APP_URL_BACK}users/login/`,
        state, {
            header: {
                "Origin": "https://partager.netlify.app/",
            }
        }
    ).then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.user.iduser);
        setUserInfo({...res.data.user,
            idUser: res.data.user.iduser,
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName,
            nickName: res.data.user.nickName,
            email: res.data.user.email,
            money: res.data.user.money,
        })
        history.push('/buying')

    })
}


export default userLogin;