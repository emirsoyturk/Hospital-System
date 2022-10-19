import './App.css'
import '../src/output.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Services from './components/Services'
import DoctorIntro from './components/DoctorIntro'

const App = () => {
	return (
		<div class="h-[1500px]">
			<Navbar> </Navbar>
			<Introduction> </Introduction>
			<Services> </Services>
			<DoctorIntro> </DoctorIntro>
		</div>
	)
}

export default App
