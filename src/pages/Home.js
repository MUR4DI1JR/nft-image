import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchImage, selectImageData} from "../redux/slices/imageSlice";
import CardItem from "../components/cardItem";
import {Layout, Row, Space} from "antd";

import {Link} from "react-router-dom";

const Home = () => {
    const {items, status} = useSelector(selectImageData);
    const dispatch = useDispatch();
    
    
    useEffect(() =>{
        dispatch(fetchImage());
    }, []);
    
    
    const onSelectCard = (id) =>{
        console.log(id);
    }
    
    return (
        <Layout style={{
            width: "80%",
            margin: "30px auto"
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
                            return <Link key={i} to={`/item/${item.id}/${item.asset_contract.address}/${item.token_id}`}><CardItem onSelectCard={(id, address, tokenId) => onSelectCard(id, address, tokenId)} image={item.image_url} name={item.name} id={item.id}/></Link>
                        })
                    }
                </Space>
            </Row>
        </Layout>
    );
};

export default Home;