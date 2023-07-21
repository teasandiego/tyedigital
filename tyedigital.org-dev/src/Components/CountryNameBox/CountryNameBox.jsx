import React, { Component } from 'react';
import styles from './CountryNameBox.module.css';

class CountryNameBox extends Component{

    render(){
        return(
            <>
                <div className={styles.container}>
                    {this.props.name}
                </div>
            </>
        )
    }
}

export default CountryNameBox;