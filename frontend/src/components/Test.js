import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Test = () => {
    const { isAuthenticated, user } = useSelector(state => state.user);
    console.log(isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/signin" />;
    }

    return (
        <div> Hello </div>
    )
}

export default Test;