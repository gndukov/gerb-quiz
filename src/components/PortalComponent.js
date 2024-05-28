import React from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = ({ children }) => {
    const portalRoot = document.getElementById('portal-root');
    return ReactDOM.createPortal(children, portalRoot);
};

export default PortalComponent;