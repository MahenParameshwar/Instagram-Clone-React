import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import { DataContext } from "../Context/DataContextProvider";
import Footer from "../Layout/Footer/Footer";
import styles from "../Styles/Inbox.module.css";

class Inbox extends Component {
  
  render() {
    const {loggedUserData} = this.context;
    const {username} = loggedUserData
    return (
      <>
      <div className={styles.box}>
        <div className={styles.sidebar}>
          <div className={styles.sidebar_header}>
          <div><h3>{username}</h3></div>
            <div><img width="30px" src="Images/message.svg" alt=""/></div>
            </div>

            <div className={styles.scroll}>
              <div className={styles.user_list}>
                <div><Avatar/></div>
                <div style={{marginLeft:"15px",marginTop:"10px"}}>Sachin</div>
              </div>
              <div className={styles.user_list}>
                <div><Avatar/></div>
                <div style={{marginLeft:"15px",marginTop:"10px"}}>Modi</div>
              </div>
          </div>
        </div>

        <div className={styles.msg_body}>
          <div className={styles.msg}>
              <div className={styles.msg_icon}>
                <img width="50x" src="Images/send.svg" alt="" />
              </div>
              <div><h3>Your Messages</h3></div>
              <div style={{color:"#8e8e8e"}}>Send private photos and messages to a friend or group.</div>
              <div>
                <button className={styles.btn} >Send Message</button>
              </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
}


Inbox.contextType = DataContext
export default Inbox;
