import React from 'react';

export class Breadcrumb extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return (
      <div className="breadcrumbName">
        {this.props.breadcrumb.map( (crumb)=>{
          return (
            <div>{crumb}</div>
          )
        })}
      </div>
    )
  }
}
