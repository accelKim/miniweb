import React from "react";
import { useEffect } from "react";

function Kakaomap() {
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(37.3391, 127.1094),
            level: 3
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(37.3391, 127.1094);

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null); 
    }, []);
    return (
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
    )
}

export default Kakaomap;