import './App.css'
import '../src/output.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Services from './components/Services'

const App = () => {
	return (
		<div class="h-[1000px]">
			<Navbar> </Navbar>
			<Introduction> </Introduction>
			<Services> </Services>
		</div>
	)
}

export default App
