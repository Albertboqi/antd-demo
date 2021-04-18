import React from 'react';
import { Button } from 'antd';
import './authManage.css'
export default class AuthManage extends React.Component{
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
      }

      render(){
          return(
            <Button 
                type="primary"
            >
                Button
            </Button>
          )
      }
    
}

 