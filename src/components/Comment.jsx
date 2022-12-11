import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
  return (
    <div className={styles.comment}>
      <img src="https://github.com/jvrapi.png" />
      
      <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>João Vitor</strong>
                <time title='12 de dezembro às 11:40' dateTime='2022-12-11 11:40:00'>cerca de 1h atrás</time>
              </div>

              <button title='Deletar comentário'>
                <Trash size={24}/>
              </button>
            </header>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
      </div>
    </div>
  )
}