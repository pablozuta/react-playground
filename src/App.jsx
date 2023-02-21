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
import Counter from './components/Counter'
import AxiosFetch from './components/AxiosFetch'
import ReactTable from './components/ReactTable'
import DisectingProps from './components/DisectingProps'
import InnerStyle from './components/InnerStyle'


function App() {
  return (
    <div>
     
    <PropsDest nombre="Pablo" edad="40"/>
    <DisectingProps/>
     <InnerStyle/>

   
   
    </div>
  )
}

export default App
