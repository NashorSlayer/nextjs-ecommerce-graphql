import ShowProfile from "@/components/ShowProfile";
import HeaderRegistered from '@/components/commons/HeaderRegistered';
import React from 'react';

const Profile = () => {
    return (
        <div className='mb-4'>
            <HeaderRegistered></HeaderRegistered><ShowProfile></ShowProfile>
        </div>
    );
}

export default Profile;