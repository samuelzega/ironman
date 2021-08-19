import React from 'react'
import { Row, Col, Image } from 'antd'
import styles from './style.module.css'

export default function gifCards({ data }) {
    return (
        <div className={'site-card-wrapper'}>
            <Row gutter={16}>
                {data.map((element) => (
                    <Col
                        style={{
                            marginBottom: '10vh',
                        }}
                        key={element.id}
                        span={24}
                        md={12}
                        xl={8}
                    >
                        <Image
                            placeholder={
                                <Image
                                    preview={false}
                                    style={{
                                        width: '25vw',
                                        height: '20vw',
                                        backgroundColor: 'grey',
                                    }}
                                    src={element.images.preview_gif.url}
                                    width={200}
                                />
                            }
                            className={styles.image}
                            src={element.images.original.url}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}
