import React, { useEffect, useState } from 'react';
import '../css/Login.css';

const LoginKakao = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [profileNickname, setProfileNickname] = useState(""); // 프로필 닉네임 상태 추가

    useEffect(() => {
        // KAKAO 로그인
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.async = true;
        script.onload = () => {
            if (window.Kakao) {
                window.Kakao.init("c7109f1ffcc44e4196e023eb9a0efe50");
                checkKakaoLoginStatus();
            }
        };
        document.body.appendChild(script);
    }, []);

    const checkKakaoLoginStatus = () => {
        if (window.Kakao.Auth.getAccessToken()) {
            // KAKAO 로그인 성공 시 프로필 정보 가져오도록 수정
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: res => {
                    const kakao_account = res.kakao_account;
                    if (kakao_account) {
                        const nickname = kakao_account.profile.nickname;
                        if (nickname) {
                            // 로그인 성공 시 profileNickname 업데이트
                            setProfileNickname(nickname);
                        }
                    }
                }
            });
            setIsLogged(true);
        }
    };

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
                            if (kakao_account) {
                                const nickname = kakao_account.profile.nickname;
                                if (nickname) {
                                    // 로그인 성공 시 profileNickname 업데이트
                                    setProfileNickname(nickname);
                                }
                            }
                            setIsLogged(true);
                        }
                    });
                }
            });
        }
    };

    const kakaoLogout = () => {
        if (window.Kakao.Auth.getAccessToken()) {
            window.Kakao.Auth.logout(function () {
                setIsLogged(false);
                setProfileNickname(""); // 로그아웃 시 profileNickname 초기화
                console.log('로그아웃되었습니다.');
            });
        }
    };

    return (
        <div>
            {isLogged ? (
                // 로그인 성공 시 버튼 텍스트 변경
                <div>
                    <button>{profileNickname}님이 로그인 하셨습니다.</button>
                    <button style={{ backgroundColor: "green", marginRight: "10px" }} onClick={kakaoLogout}>로그아웃</button>
                </div>
            ) : (
                // 로그인 버튼
                <a onClick={kakaoLogin}>
                    <button>로그인</button>
                </a>
            )}
        </div>
    );
}

export default LoginKakao;
