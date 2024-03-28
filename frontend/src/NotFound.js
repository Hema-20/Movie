import React from 'react'
import {Link} from 'react-router-dom';
import notfound from './notfound.gif';

export default function NotFound() {
  return (
    <div className="page-not-found">
        <h1>404 not found </h1>
        <h2><Link to="/portal/home">Back to HomePage</Link></h2>    
        <img src={notfound}/>
    </div>
  )
}
