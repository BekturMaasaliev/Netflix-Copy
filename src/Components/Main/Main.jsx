import { useState } from 'react'
import { DATA } from '../../../data'
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation'
import Sidebar from '../../UI/Sidebar/Sidebar'
import Episodes from '../Episodes/Episodes'
import Information from './Information'
import styles from './Main.module.scss'

const Main = () => {
	const [isSidebarShow, setIsSidebarShow] = useState(false)
	const [activeTab, setActiveTab] = useState(1)

	return (
		<div className={styles.wrapper}>
			<Sidebar />
			<div style={{}}>
				<Information movie={DATA[0]} />
				<BottomNavigation/>
			</div>
		</div>
	)
}

export default Main
