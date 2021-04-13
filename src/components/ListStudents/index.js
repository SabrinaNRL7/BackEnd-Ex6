import {Component} from "react";

class ListStudents extends Component{
    //STATE
    //ada dua cara
    //cara 1 - pake constructor
    /*constructor(){
        super();
        this.state = {
            subTitle: "Welcome",
        };
    }*/

    //cara 2
    state = {
        subTitle: "Welcome",
    };

    handleChange = () => {
        this.setState({ subTitle: "Selamat Datang"});//event handling ("mengubah isi object. misalkan welcome jadi selamat datang")
    };

    componentDidMount() {
        console.log("Component Did Mount dijalankan");
    }

    componentDidUpdate() {
        console.log("Component Did Update dijalankan");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount dijalankan");
    }

    render(){
        console.log("render dijalankan");
        const {title, students} = this.props;
    return (
        <div>

        <h3>{title}</h3>
        <p>{this.state.subTitle}</p>

        <ul>
          {students.map(student =>{return <li>{student.name}</li>;})}  
        </ul> 

        <button onClick={this.handleChange}>Change Subtitle</button> 

        </div>
    )
}
}

export default ListStudents;

/*MOUNT
Life cycle
Yang pertama dijalankan itu render
Yang kedua Didmount
Yang ketiga componentDidUpdate = ketika state berubah(direfresh lagi, ditampilkan lagi)
Component Did Mount hanya dijalankan satu kali saja*/
