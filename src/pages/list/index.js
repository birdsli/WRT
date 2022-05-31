import React, { useState, useEffect } from 'react'
import ajax  from 'axios'


import { Button } from 'antd';
// import axios from 'axios' 
import s from './index.module.scss'
import axios from 'axios';





export default function list() {
    const [flag, setflag] = useState(false);

    useEffect(() => {
            axios.get('http://localhost/listUsers').then((data)=>{
                 console.log(data,'data')
            })
    },[])



    return (
        <div className={s['bigbang-chui']} >
            <div>goggigi? </div>
            <div>yes yes yes!!!oh  oh hoh</div>
            {/* <Button type="primary">Button</Button> */}
        </div>
    )
} 