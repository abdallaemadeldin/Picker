import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRealm } from 'src/context/realm.context';
import { generateNumbers } from 'src/redux/features/home.feature';

export const useHome = () => {
    const [logs, setLogs] = useState([]);
    const [visible, setVisible] = useState(false);
    const { values } = useSelector(state => state.home);
    const dispatch = useDispatch();
    const { insert, fetch } = useRealm();

    useEffect(() => { generate(); }, []);

    const fetchLogs = async () => {
        setVisible(true);
        setLogs(await fetch());
    }

    const generate = () => dispatch(generateNumbers({ insert }));

    return { values, logs, visible, setVisible, fetchLogs, generate };
}