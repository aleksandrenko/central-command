import './style.less';

import '../../../node_modules/graphiql/graphiql.css';

import React from 'react';
import GraphiQL from 'graphiql';
import SERVER from '../../server';

const graphQLFetcher = (graphQLParams) => {
  return fetch(SERVER.URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
};

const Component = React.createClass({
  render() {
    return (
        <section className='graphiql-wrapper'>
          <GraphiQL fetcher={graphQLFetcher}/>
        </section>
    );
  }
});

export default Component;
