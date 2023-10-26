import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header'
import styles from './Layout.module.scss'

export const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  )
}
