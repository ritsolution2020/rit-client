import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getCategories, getFilteredProjects } from "./apiCore";
import Checkbox from "./Checkbox";


const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };

    const loadFilteredResults = newFilters => {
        // console.log(newFilters);
        getFilteredProjects(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    const loadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredProjects(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-danger mb-5">
                    Load more
                </button>
            )
        );
    };

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
    }, []);

    const handleFilters = (filters, filterBy) => {
        // console.log("SHOP", filters, filterBy);
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

    
        loadFilteredResults(myFilters.filters);
        setMyFilters(newFilters);
    };

   

    return (
        <div>
         
           
            <div className="button_cont"><a href='/' className="BackHome" >
            <i className="fas fa-angle-double-left"></i>   Back To Home </a>
                
                </div>
           
            <div className="row container ">
                <div className=" col-lg-12 col-md-12 col-sm-12 mb-3 m-auto ">
                    <h5 className="mb-4 mt-5 text-center">Categories</h5>
                    <ul className='text-center'>
                        <Checkbox
                            categories={categories}
                            handleFilters={filters =>
                                handleFilters(filters, "category")
                            }
                        />
                    </ul>

                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h5 className="mb-4 text-center">Projects</h5>
                    <div className="row">
                        {filteredResults.map((project, i) => (
                            <div className=" col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <Card  key={i} project={project} />
                            </div>
                        ))}
                    </div>
                    <hr />
                    {loadMoreButton()}
                </div>
            </div>
        </div>
    );
};

export default Shop;