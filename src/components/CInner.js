import React, { Component } from "react";


export default class CInner extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
        console.log("CInner - konstruktor");
    }

    static getDerivedStateFromProbs(props, state){
        console.log("CInner- getDerivedStateFromProbs()")
        return null
    }

    componentDiMount(){
        console.log("CInner - componentDidMount()")
    }

    render() {
        console.log("CInner - render()")
        return( 
            <div>
                <h3 className='bgClassInner'> komponent wewnętrzny</h3>
                {/*<h3 className='bgClassInner'> komponent wewnętrzny</h3>*/}
            </div>
        )
    }

    shouldComponentUpdate(){
        console.log("CInner - shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(pprops,pstate){
        console.log("CInner - getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("CInner - componentDidUpdate")
    }

}

