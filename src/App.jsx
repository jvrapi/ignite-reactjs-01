import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='João Vitor'
            content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, ex harum quasi officiis, temporibus, molestiae debitis assumenda porro dicta doloremque exercitationem quo quisquam accusamus fuga iusto amet error obcaecati non!'
          />
        </main>
      </div>
    </div>
  )
}

export default App

