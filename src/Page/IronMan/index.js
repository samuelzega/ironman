import React, { useState, useEffect } from 'react'
import { Typography } from 'antd'
import styles from './style.module.css'
import searchApi from '../../Api/search'
import { Gifs } from '../../Component'

export default function IronMan() {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        try {
            const response = await searchApi({ q: 'iron man' })
            setAllData(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={styles.container}>
            <Typography.Title className={styles.title} level={2}>
                IRON MAN GIPHY
            </Typography.Title>
            <div className={styles.cardbox}>
                <Gifs data={allData} />
            </div>
        </div>
    )
}
