import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchImage, selectImageData} from "./redux/slices/imageSlice";
import CardItem from "./components/cardItem";
import {Layout, Row, Space} from "antd";

import './App.css';

const App = () => {
    const {items, status} = useSelector(selectImageData);
    const dispatch = useDispatch();


    useEffect(() =>{
        dispatch(fetchImage());
    }, [])

    console.log(items);

    return (
        <Layout style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center"
        }}>
            <Row>
                <Space
                    size="middle"
                    wrap
                    style={{
                        display: 'flex',
                    }}
                >
                    {
                        items.map((item, i) =>{
                            return <CardItem image={item.image_url} name={item.name}/>
                        })
                    }
                </Space>
            </Row>
        </Layout>
    );
};

export default App;