import {useEffect, useRef} from 'react'

import HomeSection from './Home';
import Survey from './Survey';
import ResponseSection from './Response';
import Footer from './Footer';



const SinglePage = ({callback}) => {
  
    const HomeRef = useRef();
    const SurveyRef = useRef();
    const ResponseRef = useRef();
   
    // const [renders,setRender] = useState(0);
    useEffect( () => {
      let options = {
        root: null,
        rootMargin: '66px 0px 0px 0px',
        threshold: 0.3
      }
        let observer = new IntersectionObserver(callback, options);
        // if(renders===0)
        //     setRender(1);
        // if(renders >= 1)
      
      observer.observe(HomeRef.current);
      observer.observe(SurveyRef.current);
      observer.observe(ResponseRef.current);
      
    },[callback])
      
    return(
        <div style={{marginTop:66}}>
           <HomeSection rectRef={HomeRef}  />
          <Survey rectRef={SurveyRef} />
          <ResponseSection rectRef={ResponseRef}/>
        <Footer />
        </div>
    )
}

export default SinglePage;