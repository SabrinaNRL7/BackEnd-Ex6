import { Component } from "react";
import ListStudents from "./components/ListStudents";
class App extends Component {
  state = {
    isShow: true, //kalo di false, maka component WillUnmount dijalankan
  };

  toggleButton = () => {
    this.setState({isShow: !this.state.isShow});
  };

  render(){
    const backend = [
      {
        name: 'John',
        address: 'Manado',
      },
      {
        name: 'Jane',
        address: 'Airmadidi',
      },
      {
        name: 'Bob',
        address: 'Tomohon',
      },
    ];

    const webpro = [
      {
        name: 'Ziva',
        address: 'Telling',
      },
      {
        name: 'Zoana',
        address: 'Malalayang',
      },
      {
        name: 'Zony',
        address: 'Tondano',
      },
    ];
    return (
     <>
      {
        this.state.isShow && (
        <ListStudents title="Back-End Programming Class" students={backend}/>)
      }
      
      {/* <ListStudents title="Web Programming Class" students={webpro}/> */}
      <button onClick={this.toggleButton}>Toggle List Student</button>
     </>
    )
  }
}


export default App;