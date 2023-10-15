// LoginKakao.js
import React, { useEffect } from 'react';

const LoginKakao = () => {
    useEffect(() => {
        // KAKAO 로그인
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.async = true;
        script.onload = () => {
            if (window.Kakao) {
                window.Kakao.init("c7109f1ffcc44e4196e023eb9a0efe50");
            }
        };
        document.body.appendChild(script);
    }, []);

    const kakaoLogin = () => {
        if (window.Kakao) {
            window.Kakao.Auth.login({
                scope: 'profile_nickname, account_email, gender',
                success: function (authObj) {
                    console.log(authObj);
                    window.Kakao.API.request({
                        url: '/v2/user/me',
                        success: res => {
                            const kakao_account = res.kakao_account;
                            console.log(kakao_account);
                        }
                    });
                }
            });
        }
    };

    return (
        <div>
            <a onClick={kakaoLogin}>
                <button>Login</button>
            </a>
        </div>
    );
}

export default LoginKakao;
