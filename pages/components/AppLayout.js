import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

// AppLayout 컴포넌트
// 페이지별로 링크로 이동할 수 있는 라우터가 있으면 좋겠다. react router가 아닌, next에선 자체적인 router를 사용한다. => <Link> tag + <a> tag
// a에 hyper reference가 아니라 link에 hyper reference이다.
const AppLayout = ({ children }) => {
    return (
        <div>
            <Link href='/'><a>홈화면으로 이동</a></Link>
            <Link href='/profile'><a>프로필 화면으로 이동</a></Link>
            <Link href='/signup'><a>회원가입 화면으로 이동</a></Link>
            {children} 
            <div>---공통메뉴---</div>
        </div>
    );
};
// props로 넘기는 애들은 propTypes로 검사해주는 것이 좋다?

// 유효성 검사기 : 타입 검사기로 봐도 된다. 
AppLayout.propTypes = {
    children: propTypes.node.isRequired, // "children의 타입은 node type이어야 한다" 를 테스트한다. 
};


export default AppLayout;
