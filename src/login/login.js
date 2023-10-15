import React, { useEffect } from 'react';

const Login = () => {
    useEffect(() => {
        // KAKAO 로그인
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.async = true;
        script.onload = () => {
            Kakao.init("c7109f1ffcc44e4196e023eb9a0efe50");
        };
        document.body.appendChild(script);
    }, []);

    const kakaoLogin = () => {
        Kakao.Auth.login({
            scope: 'profile_nickname, account_email, gender',
            success: function (authObj) {
                console.log(authObj);
                Kakao.API.request({
                    url: '/v2/user/me',
                    success: res => {
                        const kakao_account = res.kakao_account;
                        console.log(kakao_account);
                    }
                });
            }
        });
    };

    return (
        <div>
            <a onClick={kakaoLogin}>
                <img src="https://www.gb.go.kr/Main/Images/ko/member/certi_kakao_login.png" alt="Kakao Login" />
            </a>
        </div>
    );
}

export default Login;
