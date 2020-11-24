import React, { Component } from 'react';
import { DataContext } from '../Context/DataContextProvider';
import { Header } from '../Layout';
import { User_Posts } from '../Layout/User_Posts/User_Posts';
// import { Routes } from '../Routes';

class Home extends Component {
    render() {
        const {getPosts} = this.context
        console.log(getPosts())
        return (
            <div className="container">
                <main className="main_container">
                    <div>
                    {
                        getPosts()?.map((item)=>{
                            return(
                            <User_Posts key={item.post_id} item={item}/>  
                            
                            )
                        })

                    }
                    </div>
                </main>
            </div>
        );
    }
}
Home.contextType = DataContext

export default Home;