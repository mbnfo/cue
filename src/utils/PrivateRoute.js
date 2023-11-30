import { Route, Redirect } from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({children, ...rest}) => {

    const {user} = useContext(AuthContext)

    return (
        <Route {...rest}>{!user?<Redirect to = "cue/#login"/>: children}</Route>
    )
}

export default PrivateRoute