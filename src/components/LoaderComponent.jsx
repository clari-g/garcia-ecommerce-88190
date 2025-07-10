import Spinner from 'react-bootstrap/Spinner'

const LoaderComponent = () => {

  return (
    <div className="text-center" style={{marginTop: 20}}>
        <Spinner animation="border" role="status" size="">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  )
}

export default LoaderComponent