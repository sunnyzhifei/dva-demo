import React from 'react';
import {connect } from 'dva';


class Example extends React.Component{
    render(){
        return(
            <div>
                example
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {exampleProps:state}
}

export default connect(mapStateToProps)(Example)