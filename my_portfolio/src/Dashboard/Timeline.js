import React from 'react'
import '../Dashboard/Timeline.css'
 
const Timeline = () => {
  return (
  
  <div>
    <h1>UL timeline cards</h1>
    <h1>Work experience</h1>
    <br />
    <ul >
    <li className='liOrange'>
        <div class="date">2014</div>
        <div class="title">B.Tech, Rayat And Bahara College, Mohali, Punjab.</div>
        <div class="descr">E.C.S.E Branch <b>61%</b></div>
    </li>
    <li className='liOrange'>
        <div class="date">2011</div>
        <div class="title">Class XII, DPS Public School, Gaya</div>
        <div class="descr">E.C.S.E Branch <b>61%</b></div>    </li>
    <li className='liOrange'>
        <div class="date">2008</div>
        <div class="title">Class X, DAV Public School, Cantt Area, Gaya</div>
        <div class="descr">E.C.S.E Branch <b>60%</b></div>    </li>
</ul>

<h1>My Projects Completed</h1>
    <br />
    <ul>
    <li className='liGreen'>
        <div class="date">2014</div>
        <div class="title">B.Tech, Rayat And Bahara College, Mohali, Punjab.</div>
        <div class="descr">E.C.S.E Branch <b>61%</b></div>
    </li>
    <li className='liGreen'>
        <div class="date">2011</div>
        <div class="title">Class XII, DPS Public School, Gaya</div>
        <div class="descr">E.C.S.E Branch <b>61%</b></div>    </li>
    <li className='liGreen'>
        <div class="date">2008</div>
        <div class="title">Class X, DAV Public School, Cantt Area, Gaya</div>
        <div class="descr">E.C.S.E Branch <b>60%</b></div>    </li>
</ul>
    <h1>Education</h1>
    <br />
    <ul>
    <li className='liNavy'>
        <div class="date">2014</div>
        <div class="title">B.Tech, Rayat And Bahara College, Mohali, Punjab.</div>
        <div class="descr">E.C.S.E Branch <b>61%</b></div>
    </li>
    <li className='liNavy'>
        <div class="date">2011</div>
        <div class="title">Class XII, DPS Public School, Gaya</div>
        <div class="descr">E.C.S.E Branch <b>61%</b></div>    </li>
    <li className='liNavy'>
        <div class="date">2008</div>
        <div class="title">Class X, DAV Public School, Cantt Area, Gaya</div>
        <div class="descr">E.C.S.E Branch <b>60%</b></div>    </li>
</ul>
<div class="credits"><a target="_blank" href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm">inspired by</a></div>
  </div>

  )
}

export default Timeline
