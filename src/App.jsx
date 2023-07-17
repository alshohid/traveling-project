 
 
import ToDo from "./components/ToDo";
import Header from "./components/Header";
 

 

 
 
 const App = () =>  {
  
    return(
        <>
          <header>
            <Header/>
          </header>
        <div className="container  ">
            <div className="   w-screen ">
                <div className=" block mx-auto ">
                      <ToDo />
                </div>
             
            </div>
            
           

        </div>
          
        </>
    );
 };
 
 export default App;