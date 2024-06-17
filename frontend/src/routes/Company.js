// Company Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';


// Components & Necessary Files 
import JoblyApi from '../JoblyApi';


// Company Component 
function Company() {

    const [ companies, setCompanies ] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try{
                const response = await JoblyApi.getCompanies();
                console.log( response );
                setCompanies( response );
            }
            catch( error ){
                console.error( `Error Fetching Companies`, error );
            }
        }

        fetchCompanies();

    }, [] );

    return( 
        <div
            className = 'company-container'
        > 
            <h1> Company Component </h1>

            <div
                className = 'companies-container'
            > 
            { companies.map(( item, index ) => ( 
                <div 
                    key = { item.handle }
                >   
                    <h3> { item.name } </h3>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Company;