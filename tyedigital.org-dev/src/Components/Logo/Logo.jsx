import React, { Component } from 'react';
import styled from '@emotion/styled';
import styles from './Logo.module.css';

// const logo = styled.img`
//     border: none;
//     height: 20%;
//     width:20%;
//     border-radius:10%;
// `

class Logo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <div className={styles.logo_container}>
                    
                </div>
            </>
        )
    }
}

export default Logo;