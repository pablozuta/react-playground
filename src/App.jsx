import Conditional from './components/Conditional'
import Fetch from './components/Fetch'
import FetchComments from './components/FetchComments'
import List from './components/List'
import Events from './components/Events'
import ListExternalData from './components/ListExternalData'
import Main from './components/Main'
import TanStack from './components/TanStack'
import UForm from './components/UForm'
import CForm from './components/CForm'
import UseRefComponent from './components/useRefComponent'
import Dog from './components/GrandChildren/Dog'
import SuspenseComp from './components/SuspenseComp'
import PropsDest from './components/PropsDest'
import ClassComp from './components/ClassComp'
import Table from './components/Table'


function App() {
  return (
    <div>
     
    <PropsDest nombre="Pablo" edad="40"/>
    <ClassComp />
    <Table />
   
    </div>
  )
}

export default App
