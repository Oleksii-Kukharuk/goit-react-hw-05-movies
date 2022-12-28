import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';

export const Reviews = () => {
  const [feedBack, setFeedBack] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchReviews(id) {
      try {
        const getReviews = await getMovieReviews(id);
        setFeedBack(getReviews.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {feedBack.length > 0
        ? feedBack.map(({ author, content, id }) => {
            return (
              <div key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </div>
            );
          })
        : 'threis no feedback yet'}
    </>
  );
};
