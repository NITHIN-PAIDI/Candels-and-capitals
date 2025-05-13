import React from 'react';
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    
    return (
      <Component 
        {...props} 
        navigate={navigate} 
        location={location} 
        params={params}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    );
  }

  return ComponentWithRouterProp;
}