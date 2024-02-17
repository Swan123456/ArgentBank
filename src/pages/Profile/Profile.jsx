import React from 'react';
import User from '../../components/User';
import Account from '../../components/Account';
import AccountCardData from '../../data/AccountCardData.json';

/* User profile page */
function UserProfile () {

    return (
        <div className='profile-page'>
            <main className='bg-dark'>
                < User />
                {AccountCardData.map((data) => (
                    <Account 
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
            </main>
        </div>
    )
}

export default UserProfile