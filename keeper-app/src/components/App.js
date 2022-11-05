import './styles.css'
import Header from './Header';
import Footer from './Footer';
import notes from './note';

function createNote(notes){
   
    return(
        <Note 
        key = {notes.id}
        title = {notes.title}
        content = {notes.content}
    />
    )
}
function Note(props){

     return(
        <div className="note">
        <h1>
           {props.title}
        </h1>
        <p>
            {props.content}
        </p>
       </div>

     )
    
}
function App(){

    return(
       <div className='App'>
       <Header />
        {notes.map(createNote)}
       <Footer />
       </div>
    );
}

export default App;