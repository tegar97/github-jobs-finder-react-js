import React from 'react';
import useFetchJobs from './useFetchJobs'
import {container} from 'react-bootstrap'


function App() {
  const {jobs ,loading ,error} = useFetchJobs()
  return (
    <container>
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Error. Try REFRESHING.</h1>}
      <h1>{jobs.length}</h1>
    </container>

    
  );
}

export default App;
