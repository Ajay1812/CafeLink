// ``````import { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Math from "./Math";
// import Gk from "./Gk"

// export default class Routing extends Component {
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <nav>
//                         <ul>
//                             <li>
//                                 <Link to="/Math" activeStyle = {{color : "red"}}>Math Quiz</Link>
//                             </li>
//                             <li>
//                                 <Link to="/Gk" activeClassName = {"active"}>Gk Quiz</Link>
//                             </li>
                            
//                         </ul>
//                     </nav>
//                     <Switch>
//                         <Route path="/Math" activeStyle = {{color : "red"}}>
//                             <Math />
//                         </Route>
//                         <Route path="/Gk" activeClassName = {"active"}>
//                             <Gk />
//                         </Route>
                        
//                     </Switch>
//                 </div>
//             </Router>
//         );
//     }
// }
