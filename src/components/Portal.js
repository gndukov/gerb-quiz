import React from "react";
import PortalComponent from "./PortalComponent";
import Alert from '@mui/material/Alert';

const getPortalStyle = () => {
    const elem = document.querySelector("#testId");
    const quizCard = document.querySelector(".quizCard");
    if (elem && quizCard) {
        const elemRect = elem.getBoundingClientRect();
        const quizCardRect = quizCard.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const elemWidth = elem.clientWidth;

        if (windowWidth < 2 * elemWidth) {
            // Position the portal element underneath the quizCard
            return {
                position: 'absolute',
                top: `${quizCardRect.bottom + window.scrollY + 10}px`, // Adjust for any desired offset
                left: `${quizCardRect.left + window.scrollX}px`,
                zIndex: 1000
            };
        } else {
            // Default position to the right of the element
            return {
                position: 'absolute',
                top: `${elemRect.top + window.scrollY - 10}px`,
                left: `${elemRect.left + window.scrollX + elem.clientWidth + 10}px`,
                zIndex: 500
            };
        }
    }
    return {};
};

const formatText = (text, maxLength) => {
    if (!text) return '';
    const words = text.split(' ');
    let formattedText = '';
    let line = '';

    for (let i = 0; i < words.length; i++) {
        if ((line + words[i]).length > maxLength) {
            formattedText += line.trim() + '\n';
            line = '';
        }
        line += words[i] + ' ';
    }

    return formattedText + line.trim();
};

export const Portal = ({ alertText, incorrect }) => {
    const [style, setStyle] = React.useState({});
    const [visible, setVisible] = React.useState(false);
    const resizeTimeoutRef = React.useRef(null);

    const updateStyle = () => {
        setStyle(getPortalStyle());
    };

    React.useEffect(() => {
        const handleResize = () => {
            setVisible(false);
            clearTimeout(resizeTimeoutRef.current);
            resizeTimeoutRef.current = setTimeout(() => {
                updateStyle();
                setVisible(true);
            }, 300); // Adjust the delay as needed
        };

        handleResize(); // Initial positioning

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', updateStyle);
            clearTimeout(resizeTimeoutRef.current);
        };
    }, []);

    const formattedText = formatText(alertText, 50);

    return (
        <div>
            <PortalComponent>
                {visible && (
                    <div style={style}>
                        <Alert severity={incorrect ? "error" : "success"}>{
                            formattedText.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))
                        }</Alert>
                    </div>
                )}
            </PortalComponent>
        </div>
    );
};