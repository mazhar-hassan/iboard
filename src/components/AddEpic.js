import React from 'react';


export default class AddEpic extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {
            id : props.epic ? props.epic.id : undefined,
            title: props.epic ? props.epic.title : '',
            lastState: props.epic ? props.epic.lastState: '',
            error:''
        };
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState({ title });
    };

    onLastStateChange = (e) => {
        const lastState = e.target.value;
        this.setState({ lastState });
    };

    onSubmit = (e) => {
        e.preventDefault();
       if (!this.state.title || !this.state.lastState) {
            this.setState({error:'Title and state is mandatory'});
        } else {
            this.setState({error:''});
            this.props.onSubmit({id: this.state.id, title: this.state.title, state:this.state.lastState});
        }
    }
render() {
    return (
        <form onSubmit={this.onSubmit}>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
    <h3 class="uk-card-title">Add</h3>

    <div class="add-card">
        <p>
        {this.state.error && <p>{this.state.error}</p>}
        <input 
            type="text" 
            placeholder="title"  
            name="title"  
            value={this.state.title}
            onChange={this.onTitleChange}  />

        <input 
            type="text" 
            placeholder="last state" 
            name="lastState" 
            value={this.state.lastState}
            onChange={this.onLastStateChange} /> 
        
            <input type="submit" value="Add" />
            </p>
    </div>
    </div>
</form>)
}
}