import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollTopRouter({ history, anotherContainer }) {
  useEffect(() => {
    const routeChanged = history.listen(() => {
      window.scrollTo(0, 0);

      if(anotherContainer){
        anotherContainer.current.scrollTop = 0;
      }
    });
    return () => {
        routeChanged();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollTopRouter);