import React from 'react';
import propTypes from 'prop-types';

const AnotherLayout = ({children}) => {
    return (
        <div>
            <div>---신기한 리액트 세상---</div>
                    <div>
                         {children}
                    </div>
            <div>---신기한 리액트 세상 마무리---</div>
        </div>
    );
};

AnotherLayout.propTypes = {
    children: propTypes.node.isRequired,
};


export default AnotherLayout;