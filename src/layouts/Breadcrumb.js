import React from 'react';

const Breadcrumb = () => {
    return (
        <div className='breadcrumb_line'>
            <div class="breadcrumb">
                <ul class="breadcrumb_list container">
                    <li class="breadcrumb_item  menu_link go_home" page-m1="home">
                        <img src="/res/service/img/index/common/ico_home.png" alt="HOME" />
                    </li>
                    <li class="breadcrumb_item">정화소개</li>
                    <li class="breadcrumb_item">학교법인</li>
                </ul>
            </div>

        </div>
    )
}

export default Breadcrumb;