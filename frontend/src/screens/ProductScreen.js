
import {useState, useEffect } from "react"
import { useParams } from "react-router-dom";

function ProductScreen(){
    const {slug} = useParams();
    
    const [documentData, setDocumentData] = useState ();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(()=> {
        const fetchDocumentData = async () => {
            try{
            const res = await fetch (`http://localhost:5002/products/${slug}`)
            const data = await res.json()
            
            
            if (data[0] && data[0]._id) {
                setDocumentData( data[0]);
            }else {
                setDocumentData(null);
                console.log("Invalid data format");
            }
            }catch(e) {
                setError(true);
                console.log(`Error fetching data: ${e}`)
                
            } finally {
                setLoading(false);
            }

        
        };
        fetchDocumentData();
    }, [slug]);
    
    return (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {error ? (
                <p>Error: Could not load data</p>
              ) : (
                <>
                  <h2>{documentData.name}</h2>
                  <p>{documentData.description}</p>
                  <p>{documentData.price}</p>
                  <p>{documentData.rating}</p>
                  <img src={documentData.image} alt={documentData.name} />
                </>
              )}
            </>
          )}
        </div>
    );
 }
export default ProductScreen;