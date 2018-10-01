import React, { Component } from 'react';


class Header extends Component {
    constructor(props){
        super(props);

        this.onChangeFn = this.onChangeFn.bind(this);

        this.state = {
            "keyword": ""
        }
    }

    onChangeFn = (txtval) => {
        this.props.filterList(txtval.target.value)
    }

    render(){
        return(
            <header>
                <div>
                    <label>Filter Result: </label>
                    <input type="text" onChange={this.onChangeFn} />
                    <p>{this.state.keyword}</p>
                </div>
            </header>
        )
    }
}
export default Header;