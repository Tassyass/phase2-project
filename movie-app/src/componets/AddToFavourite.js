export default function AddToFavourite ({selectMovie,removeFromFavourite}){

    const handleRemove = (id) => {
        removeFromFavourite(id);
      };
    return (
        <>
        <h2>ADD TO FAVOURITE</h2>
        <div className="movie-dispaly">
            {selectMovie.map(movie=>(
                <div className="movie-card">
                     <img src={movie.posterUrl} />
                     <h2>Title:{movie.title}</h2>
                     <h2>Year:{movie.year}</h2>
                     <h3>Runtime:{movie.runtime}</h3>
                     <button onClick={() => handleRemove(movie.id)}>REMOVE FROM FAVOURITE</button>
                </div>
            ))}
        </div>
        </>
    )
}