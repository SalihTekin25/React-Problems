import styles from './styles.module.css'



const ChatItem = ({item}) => {
    return (
        <div className={styles.chatItem}>
            {item.messages}
        </div>
    )
}

export default ChatItem