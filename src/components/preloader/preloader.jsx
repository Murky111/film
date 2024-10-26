import './preloader.css'
export const Preloader = ({ children, isLoading }) => {
    if (isLoading) {
      return( 
      <div className="main_preloader">Loading...</div>
      )
    }else{
        return(
            (children)
        )
    }
  };
  