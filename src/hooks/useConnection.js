import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';
import { setHasConnection } from '../slices/appSlice';

export default () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            dispatch(setHasConnection(state.isConnected))
        });
        return unsubscribe
    },[])
}