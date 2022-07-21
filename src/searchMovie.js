import { Link } from "react-router-dom";

function SearchMovie({searchValue, setSearchValue}) {
    return (
      <div className="row">
        <input className="search" value={searchValue} type="text" onChange={(e) => {
          setSearchValue(e.target.value);
  
        }} />
        <Link to={'/fav'}><p style={{color:'white'}} className='text'>Favorite Movie</p></Link>
      </div>
    );
  }
export default SearchMovie;