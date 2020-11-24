import React, { Component } from 'react';
import { DataContext } from '../../Context/DataContextProvider';
import styles from '../../Styles/viewprofile.module.css'
class ProfileOptions extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }


    render() {
        const {userId}  =this.props
        const {getUsers} = this.context
        const getUserId =  getUsers()?.find((res)=>res.user_id===userId)
        //const {username,avatar_img} = getUserId
        console.log(getUserId)
        return (
            <div className={styles.profile_user_settings}>
                <h1>
                    {getUserId["username"]}
                </h1>
            <button class="btn profile-message-btn">Message</button>
            </div>
        );
    }
}

ProfileOptions.contextType = DataContext
export default ProfileOptions;