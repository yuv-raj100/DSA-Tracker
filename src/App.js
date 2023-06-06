import React from 'react'
import './App.css';
import Header from './Components/Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import TopicsSet from './Components/TopicsSet';
import Array from './Components/Array';
import { MyContext } from "./Components/Context/MyContext";


function App() {

    const [xml,setXml]=React.useState(0)
    
    return (
        <BrowserRouter>
        <MyContext.Provider value={{ xml, setXml  }}>
            <Header/>

            <Routes>
                <Route path='/' element={<TopicsSet/>}/>
                <Route path='/array' element={<Array type="Array"/>}/>
                <Route path='/matrix' element={<Array type="Matrix"/>}/>
                <Route path='/string' element={<Array type="String"/>}/>
                <Route path='/searching' element={<Array type="Searching & Sorting"/>}/>
                <Route path='/linkedList' element={<Array type="LinkedList"/>}/>
                <Route path='/binaryTree' element={<Array type="Binary Trees"/>}/>
                <Route path='/bst' element={<Array type="Binary Search Trees"/>}/>
                <Route path='/greedy' element={<Array type="Greedy"/>}/>
                <Route path='/backtracking' element={<Array type="BackTracking"/>}/>
                <Route path='/stack' element={<Array type="Stacks & Queues"/>}/>
                <Route path='/heap' element={<Array type="Heap"/>}/>
                <Route path='/graph' element={<Array type="Graph"/>}/>
                <Route path='/trie' element={<Array type="Trie"/>}/>
                <Route path='/dp' element={<Array type="Dynamic Programming"/>}/>
                <Route path='/bit' element={<Array type="Bit Manipulation"/>}/>
            </Routes>
            </MyContext.Provider>
        </BrowserRouter>
     
    );
}

export default App;
