import React, { useState, useEffect } from 'react'
import {
    Typography,
    Row,
    Col,
    Card,
    Input,
    Button,
    TypographyProps,
} from 'antd'
import styles from './style.module.css'
import searchApi from '../../Api/search'
import { Gifs } from '../../Component'

export default function Search() {
    const [allData, setAllData] = useState([])
    // const [searchValue, setSearchValue] = useState('')
    // useEffect(() => {
    //     search()
    // }, [])
    const search = async (keyword) => {
        if (!keyword || keyword.length < 3) {
            return
        }
        try {
            const response = await searchApi({ q: keyword })
            setAllData(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={styles.container}>
            <Typography.Title className={styles.title} level={2}>
                SEARCH YOUR GIPHY
            </Typography.Title>
            <Row justify="center">
                <Col xl={12} xs={20} lg={16} sm={16} md={16} span={8}>
                    <Input
                        style={{
                            marginBottom: '3vw',
                            marginTop: '3vw',
                        }}
                        name="searchValue"
                        placeholder="Search input goes here"
                        onChange={(e) => search(e.target.value)}
                    />
                </Col>
            </Row>
            <div className={styles.cardbox}>
                <Gifs data={allData} />
            </div>
        </div>
    )
}
