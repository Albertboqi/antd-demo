import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { ConfigProvider, DatePicker, message, Button, Modal, Input} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import { Fragment } from 'react';

moment.locale('zh-cn');

const NewListItem=(item)=>{
  return (
  <div className="item-title" dangerouslySetInnerHTML={{__html:item}}>{item}</div>
  )
}
function App() {
  
  const [isModalShow, setIsModalShow] = useState(false);
  const [count, setCount] = useState(Initial);
  const Counter = (Initial) =>{
    const btnClick = () =>{
      setIsModalShow(true)
    }
    return(
      <Fragment>
        <Button onClick={btnClick}>
          Show Modal
        </Button>
        <Modal
          visible={isModalShow}
        >
          
        </Modal>
      </Fragment>
    )
  }
  return (
    <div className="App">
      <Button onClick={() => {alert("hello")} }>确认</Button>
    </div>
  );
}

export default App;
