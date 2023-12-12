import logo from './logo.svg';
import './App.css';
import ram from './ram.png';

function App() {
  return (
    <div>
 <Header />
 <Middle/>
 <Muni/>
 </div>
  );
}

function Header(){
  return(
    <>
        <header>
        <h1 class="importsudip">Import Sudip</h1>
        <nav class="head">
            <a href="#home">Home</a>
            <a href="#id1">Skills</a>
            <a href="#id2">project</a>
            <a href="#project">Experience</a>
            <a href="#project">Education</a>
            <a href="#experience">Contact</a>
            <a href="#resume">Resume</a>
        </nav>
    </header>
    </>

  )
}

function Middle(){
  return(
    <div class="two">
    <div class="firsthalf">
        <p class="about">AboutMe</p>
            <p class="introp">
                Hello! I'm Sudip Majkoti, 
                a passionate data engineer and machine learning enthusiast.
                 With a keen interest in harnessing the power of data, 
                 I thrive on building robust data pipelines, optimizing data workflows, 
                 and leveraging cutting-edge technologies to extract valuable insights.
                 </p>     
    </div>
    
    <div class="secondhalf">
        <img src={ram}></img>
    </div>
    </div>
    
  )
}


function Muni(){
  return(
    <div>
      
<p class="skills" id="id1">Skills</p>
<div class="section">
<div class="dropdown">
    <span class="topic">Programming</span>
    <div class="dropdown-content">
      <p>JavaScript</p>
      <p>Python</p>
     
    </div>
  </div>

  <div class="dropdown">
    <span class="topic">Databases</span>
    <div class="dropdown-content">
      <p>MySQL</p>
      <p>MongoDB</p>
      
    </div>
  </div>

  <div class="dropdown">
    <span class="topic">Webscraping</span>
    <div class="dropdown-content">
      <p>   Scrapy</p>
     
    </div>
  </div>

  <div class="dropdown">
    <span class="topic">AWS</span>
    <div class="dropdown-content">
      <p>amazon s3</p>
      <p>amazon redshift</p>
      
    </div>
  </div>

  <div class="dropdown">
    <span class="topic">Warehouse</span>
    <div class="dropdown-content">
      <p>snowflake</p>
 
    </div>
  </div>

  <div class="dropdown">
    <span class="topic">Data reporting</span>
    <div class="dropdown-content">
      <p>Tablue</p>
      <p>PowerBI</p>
     
    </div>
  </div>

  <div class="dropdown">
    <span class="topic">Data analysis</span>
    <div class="dropdown-content">
      <p>Numpy</p>
      <p>Pandas</p>
      <p>Matplotlib</p>
      <p>Seaborn</p>
      <p>Pyspark</p>

    </div>
  </div>


  </div>

<p class="project" id="id2">Project</p>
<div className="table-container">
    <table class="table">
      <thead>
        <tr>
          <th>S.N</th>
          <th>Project</th>
          <th>Description</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>1</td>
          <td>Project A</td>
          <td>Description of Project A</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Project B</td>
          <td>Description of Project B</td>
        </tr>

        <tr>
            <td>3</td>
            <td>Project A</td>
            <td>Description of Project A</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Project B</td>
            <td>Description of Project B</td>
          </tr>
      </tbody>
    </table>
  </div>


    </div>
  )
}






export default App;
