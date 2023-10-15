import React, { useEffect, useState } from 'react';

const LoginKakao = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [profileNickname, setProfileNickname] = useState(null);

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
                            const nickname = kakao_account.profile.nickname;
                            console.log(nickname);
                            setProfileNickname(nickname);
                            setIsLogged(true);
                        }
                    });
                }
            });
        }
    };

    return (
        <div>
            {isLogged ? (
                <button>{profileNickname}님이 로그인 하셨습니다.</button>
            ) : (
                <a onClick={kakaoLogin}>
                    <button>로그인</button>
                </a>
            )}
        </div>
    );
}

export default LoginKakao;