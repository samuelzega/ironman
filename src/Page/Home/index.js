import React from 'react'
import styles from './style.module.css'
import { Typography, Image } from 'antd'
import GiphyLogo from '../../Asset/giphy-logo.png'
import { useHistory } from 'react-router'

const { Title, Text } = Typography

export default function Home() {
    const history = useHistory()
    return (
        <div className={styles.container}>
            <Title className={styles.title} level={1}>
                WELCOME TO YOUR GIPHY
            </Title>
            <Image preview={false} className={styles.image} src={GiphyLogo} />
            <div className={styles.linkBox}>
                <Text
                    className={styles.link}
                    onClick={() => history.push('/ironman')}
                >
                    IRON MAN GIPHY
                </Text>
                <Text
                    className={styles.link}
                    onClick={() => history.push('/search')}
                >
                    SEARCH YOUR GIPHY
                </Text>
            </div>
        </div>
    )
}
