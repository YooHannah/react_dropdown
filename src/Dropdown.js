import React, { Component } from 'react';
import './Dropdown.css';

class Dropdownbutton extends Component {
  change1(){
    console.log(111)
  }
  render () {
    const  content  = this.props.content;
    return (
      <div>
        <a href='javascript:' className='ui-select-button _' value={content.id} onClick = {this.props.clickfunc}>{content.name}</a>
      </div>
    )
  }
}

class Item extends Component {
  render () {
    const  option  = this.props.option;
    return (
      <div>
        <a href='javascript:' className='ui-select-datalist-li' onClick={this.props.clickfunc}>{option.name}</a>
      </div>
    )
  }
}

class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state={
            id:'-1',
            name:'请选择',
            show:false
        }
    }
    showfunc(event,obj){

      obj.show = !this.state.show;
      console.log(this.state);
      this.setState(obj)
    }
    itemclick(event,obj){
      console.log(event,obj)
      obj.show = !this.state.show;
      this.setState(obj)
    }
  render () {
    const { items } = this.props;
    return (
      <div>
        <Dropdownbutton content={this.state} clickfunc = {this.showfunc.bind(this,this.state)}/>
        <div className={this.state.show?'ui-select-datalist':'ui-select-datalist active'}>
        {items.map((item,i) => <Item key={i} option={item} clickfunc={this.itemclick.bind(this,item)} />)}
        </div>
      </div>
    )
  }
}

export default Dropdown;