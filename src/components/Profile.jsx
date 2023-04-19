import React, { useState, useEffect }  from "react";

const Profile = ({user}) => {
    
    return (
        <section>
            <h1 class="text-black text-3xl font-bold">Profile</h1>
            <p>Username: {user.username}</p>
        </section>
)
}

export default Profile; 