import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const VkAuthorizationPage = () => {
    const { search } = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(search);

        console.log(urlParams.get('code'));
        window.location.href = '/';
    }, [search]);

    return <div>Vk authorization</div>;
};

export default VkAuthorizationPage;
