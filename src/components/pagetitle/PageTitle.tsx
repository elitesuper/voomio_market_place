import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom';


const PageTitle = (props:any) => {
    const title = props.title
    const {...rest} = props
    useEffect(() => {
        document.title = title;
    }, [title]);
    return <Route {...rest} />;
};
PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default PageTitle;