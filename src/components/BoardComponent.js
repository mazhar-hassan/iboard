import React from 'react';
import { connect } from 'react-redux';
import AddEpic from './AddEpic'
const BoardComponent = (props) => (



    <div className="board-dec">
        {props.session.name}
        
        <AddEpic />
    </div>
);

const mapStateToProps = (state) => {
    console.log(state);
    return {
        session: state.session
    };
};

export default connect(mapStateToProps, null)(BoardComponent);