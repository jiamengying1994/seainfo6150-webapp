import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article/Article";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import ArticleList from "./ArticleList/ArticleList";
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );

      const responseJson = await response.json();
      console.log(responseJson["181122102925-statue-of-liberty-crown"]);

      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route path="/article">
          <ArticleList articleList={Object.values(fetchedData)} />
        </Route>
      </Switch>
    </div>
  );


}

export default App;
