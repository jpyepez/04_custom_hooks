import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const isFirstRender = useRef(true);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const data = await axios.get(url);
                setData(data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };

        // bypass first render
        if (!isFirstRender.current) getData();
        else {
            isFirstRender.current = false;
            return;
        }
    }, [url]);

    return [data, loading, error, setError];
};

export default useFetch;
