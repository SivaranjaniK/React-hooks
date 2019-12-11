import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div className="ui container">
      <UserList />
      <div>
        <button
          className="ui button purple"
          onClick={() => setResource("posts")}
        >
          Posts
        </button>
        <button className="ui button teal" onClick={() => setResource("todos")}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

// class App extends React.Component {
//   state = { resource: "posts" };
//   render() {
//     return (
//       <div className="ui container">
//         <div>
//           <button
//             className="ui button purple"
//             onClick={() => this.setState({ resource: "posts" })}
//           >
//             Posts
//           </button>
//           <button
//             className="ui button teal"
//             onClick={() => this.setState({ resource: "todos" })}
//           >
//             Todos
//           </button>
//         </div>
//         {this.state.resource}
//       </div>
//     );
//   }
// }

export default App;
