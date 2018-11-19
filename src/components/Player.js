import React from 'react'
import { connect } from 'react-redux'
import {getTeam} from "../actions";

class Player extends React.Component{
    constructor(props, context) {
        super(props, context);


        this.renderList = this.renderList.bind(this)
    }

    componentWillMount() {
        this.props.getTeam();
    }


    renderList(){
    const list = this.props.reducer;
    if(list && list.length){
        console.log("List has length")
        return list.map((player, index) => {
        return (
            <div key={index} >
                <p>{player}</p>
            </div>
        )
    })
    } else {
    console.log('Nothing in list')

        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div>{this.renderList()}</div>
            </div>
        );
    }
}

    const MapStateToProps = (state) => {
    //What ever returned from here will show up as props for playerList

      // hey the reducer is wrong -- this shouldn't be an array, please fix it
    return {reducer: state[0]}
    }

export default connect(MapStateToProps, { getTeam })(Player )

