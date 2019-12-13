import React from 'react'
import '../App.css';
import T from 'prop-types';

// export const Text = ({size, children}) =>  (
//         <div className="text">
//             {children}
//         </div>
// )

export const Text = ({ size, children, onClick, ...props }) => (
    <div className="text" {...{onClick}} style={{ fontSize: size, ...props}}>
        {children}
    </div>
);

Text.propTypes = {
    size: T.string,
    onClick: T.func,
    children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired,
}

Text.defaultProps = {
    size: '15px',
    onClick: () => null
}