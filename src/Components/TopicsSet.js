import Topics from "./Topics"
import { Link } from "react-router-dom"

export default function TopicsSet(){
    return(
        <div>
            <div className='heading'>
                <h1>Before stopping,just ask yourself,"Why I started?"</h1>
            </div>
        <div className='topic-card'>
            
                <Link to="/array">
                    <Topics
                            name="Array"
                            num={36}
                            // stat="Not started"
                    />
                </Link>
                <Link to="/matrix">
                    <Topics
                        name="Matrix"
                        num={10}
                        // stat="Not started"
                    />
                </Link>
                <Link to="/string">
                    <Topics
                            name="String"
                            num={43}
                            // stat="Not started"
                    />
                </Link>
                <Link to="/searching">
                    <Topics
                            name="Search & Sort"
                            num={36}
                            // stat="Not started"
                    />
                </Link>
                <Link to="/linkedList">
                    <Topics
                            name="Linked List"
                            num={36}
                            // stat="Not started"
                    />
                </Link>
                <Link to="/binaryTrees">
                    <Topics
                            name="Binary Trees"
                            num={35}
                            // stat="Not started"
                    />
                </Link>
                <Link to="/bst">
                    <Topics
                            name="BST"
                            num={22}
                            // stat="Not started"
                    />
                </Link>
                <Link to="/greedy">
                    <Topics
                            name="Greedy"
                            num={35}
                            // stat="Not started"
                    />
                </Link>

                <Link to="/backtracking">
                    <Topics
                            name="BackTracking"
                            num={19}
                            // stat="Not started"
                    />
                </Link>

                <Link to="/stack">
                    <Topics
                            name="Stack & Queues"
                            num={38}
                            // stat="Not started"
                    />
                </Link>

                <Link to="/heap">
                    <Topics
                            name="Heap"
                            num={18}
                            // stat="Not started"
                    />
                </Link>
                
                <Link to="/graph">
                    <Topics
                            name="Graph"
                            num={44}
                            // stat="Not started"
                    />
                </Link>

                <Link to="/trie">
                    <Topics
                            name="Trie"
                            num={6}
                            // stat="Not started"
                    />
                </Link>


                <Link to="/dp">
                    <Topics
                            name="Dynamic Programming"
                            num={60}
                            // stat="Not started"
                    />
                </Link>

                <Link to="/bit">
                    <Topics
                            name="Bit Manipulation"
                            num={10}
                            // stat="Not started"
                    />
                </Link>       
                
            </div>
            </div>
    )
}