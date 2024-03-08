import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../../redux/actions/user.actions.jsx';
import User from '../../components/User.jsx';
import Account from '../../components/Account.jsx';
import AccountCardData from '../../data/AccountCardData.json';

/* User profile page */
function UserProfile () {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    /* Asynchronous function that retrieves user data and updates it with useEffect */
    useEffect(() => {
        if (!token) {
            console.error("Token de connexion introuvable");
            return;
        }
        
        const userData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    const userData = {
                        createdAt: data.body.createdAt,
                        updatedAt: data.body.updatedAt,
                        id: data.body.id,
                        email: data.body.email,
                        firstName: data.body.firstName,
                        lastName: data.body.lastName,
                        userName: data.body.userName
                    }
                    dispatch(userProfile(userData));
                } else {
                    console.log("erreur lors de la récupération du profil");
                }
            } catch (error) {
                console.error(error);
            };
        };

        userData();
    }, [dispatch, token]);

    return (
        <div className='profile-page'>
            <main className='bg-dark'>
                {token ? (
                    <>
                        < User />
                        {AccountCardData.map((data) => (
                            <Account 
                                key={data.id}
                                title={data.title}
                                amount={data.amount}
                                description={data.description}
                            />
                        ))}
                    </>
                ) : (
                    <p>Veuillez vous connecter pour accéder à votre profil.</p>
                )}
            </main>
        </div>
    )
}

export default UserProfile;
