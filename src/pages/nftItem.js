import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import axios from "../axios";
import {Avatar, Layout, Row, Spin} from "antd";
import dayjs from "dayjs";

const NftItem = () => {
    const [imageNft, setImageNft] = useState();
    const {address, token} = useParams();
    
    
    useEffect(() =>{
        async function fetchImage() {
            try{
                const {data} = await axios.get(`/asset/${address}/${token}`);
                setImageNft(data);
            }catch (e) {
                console.log(e);
            }
        }

        fetchImage();
    }, []);
    
    if (!imageNft){
        return (
            <div className="spin">
                <Spin />
            </div>
        )
    }
    
    console.log(imageNft);
    
    return (
        <Layout style={{
            width: "80%",
            margin: "30px auto"
        }}>
            <Row>
                <img width={450} src={imageNft.image_url} alt="example"/>
                <div style={{display: "block", marginLeft: 20}}>
                    <p>Name: {imageNft.name}</p>
                    <div style={{display: "flex"}}>
                        <p>Creator: {imageNft.creator.user.username}</p>
                        <Avatar style={{marginLeft: 15}} shape="square" size={64} icon={<img src={imageNft.creator.profile_img_url} alt="example"/>} />
                    </div>
                    <p>Created: {dayjs(imageNft.collection.created_date).format(
                        'MM.DD.YYYY',
                    )}</p>
                </div>
            </Row>
        </Layout>
    );
};

export default NftItem;