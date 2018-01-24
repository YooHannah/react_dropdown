import React, { Component } from 'react';
import './Dropdown.css';
/* dropdown 按钮  */
class Dropdownbutton extends Component {
  render () {
    const  content  = this.props.content;
    return (
      <div>
        <a  className='ui-select-button _' value={content.id} onClick = {this.props.clickfunc}>
        <span className="ui-select-text">{content.name}</span><i className="ui-select-icon"></i></a>
      </div>
    )
  }
}
/* 组成下拉框列表零件 */
class Item extends Component {
  render () {
    const  option  = this.props.option;
    return (
      <div>
        <a className={option.selected? 'ui-select-datalist-li selected':'ui-select-datalist-li'} onClick={this.props.clickfunc}>{option.name}</a>
      </div>
    )
  }
}

class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state={
            id:'-1',
            name:'please choose...',
            show:false,
            items:this.props.items
        }
    }

    /*点击按钮关闭下拉框*/
    showfunc(){ 
      this.setState({show:!this.state.show})
    }

    /*选定选项并关闭下拉框*/
    itemclick(obj){
      let list = this.state.items;
      let length = list.length;
      for(let i=0;i<length;i++){
        if(list[i].id !== obj.id){
          list[i].selected=false;
        }else{
           list[i].selected=true;
        }
      }
      this.setState({
        show: !this.state.show,
        id: obj.id,
        name: obj.name,
        items:list
      });
    }
  render () {
    return (
      <div className={this.state.show?'ui-select active':'ui-select'} >
        <Dropdownbutton content={this.state} clickfunc = {this.showfunc.bind(this)}/>
        <div className='ui-select-datalist' onMouseOut={this.props.changeFunc(this.state)}>
        {this.state.items.map((item,i) => <Item key={i} option={item} clickfunc={this.itemclick.bind(this,item)} />)}
        </div>
      </div>
    )
  }
}

export default Dropdown;