import React from 'react';
import {Button, Card, Row} from "antd";

const CardItem = ({image, name, id, onSelectCard}) => {
    return (
        <Card
            hoverable
            style={{
                width: 240,
                height: 350
            }}
            cover={<img height={250} alt="example" src={image} />}
        >
            <Row justify="center">
                <p>{name}</p>
            </Row>
            <Row justify="center">
                <Button type="primary" onClick={() => onSelectCard(id)} htmlType="submit">подробнее</Button>
            </Row>
        </Card>
    );
};

export default CardItem;