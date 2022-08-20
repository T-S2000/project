import FileUpload from './components/FileUpload';
//functional component
const App = () =>  {
    return(
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">
        FILE UPLOAD TO AWS
      </h4>
      <div className='text-center'>
        <FileUpload />
      </div>
    </div>
        );
}


export default App;

