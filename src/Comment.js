import React, { Component } from 'react'

const Comment = props => 
    <p className="card card-body bg-light"> 
    { props.comment.comment } <br/>
    <b>por: { props.comment.user.name } </b>
    </p>

export default Comment