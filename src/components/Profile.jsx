import Login from './Login';
import Signup from './Signup';

// const user = {
//     name: 'lion',
//     imageUrl: require('./Images/lion.jpeg').default,
//     imageSize: 100
// }

const loggindIn = true;
const loadSignUpOrLogin = loggindIn ? <Login /> : <Signup />;
function Profile() {
    return (
        <>
            {/* // <img className={user?.name} src={user.imageUrl} style={{ height: user.imageSize, width: user.imageSize }} alt={'Photo of ' + user.name} /> */}

            <div>
                {
                    loggindIn ? (<Login />) : (<Signup />)
                }
            </div>

        </>
    );
}

export default Profile;