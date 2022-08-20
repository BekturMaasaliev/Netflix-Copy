import { useState } from 'react'
import { DATA } from '../../data'
import Episodes from '../Episodes/Episodes'
import BottomNavigation from '../UI/BottomNavigation/BottomNavigation'
import Sidebar from '../UI/Sidebar/Sidebar'
import Information from './Information'
import styles from './Main.module.scss'

const Main = () => {
	const [isSidebarShow, setIsSidebarShow] = useState(false)
	const [activeTab, setActiveTab] = useState(1)
	const checkSidebar=() => {
	if(isSidebarShow){
		setIsSidebarShow(false)
	}}
	return (
		<div className={styles.wrapper} >
			<Sidebar 
			isSidebarShow={isSidebarShow}
			 setIsSidebarShow={setIsSidebarShow}

			 />
			<div 
			className={styles.main}
			onClick={() => setIsSidebarShow(checkSidebar)}
			style={{
				backgroundImage:`url(${DATA[0].mainImage})`,
			 width: isSidebarShow ? "85%" : "90%"}}>
				{activeTab === 1 ?	
				<Information movie={DATA[0]} />
				: activeTab === 2 && <Episodes /> }
				<BottomNavigation setActiveTab={setActiveTab} activeTab={activeTab}/>
			</div>
		</div>
	)
}

export default Main
