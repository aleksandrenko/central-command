//import './styles.less';

import ReactDOM from 'react-dom';
import React from 'react';

import store from './store';

import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { connect, Provider } from 'react-redux';

import AppPage from './pages/App';
import Error404 from './pages/Error404';

const state = store.getState();

const AppPageConnected = connect((state) => {
  return {
    routes: state.routes,
    inConfigMode: state.inConfigMode,
    config: state.config
  }
}, (dispatcher) => ({}))(AppPage);

// ROUTES
const router =
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppPageConnected}>
          <IndexRedirect to={ state.routes.index }/>
          { state.routes.paths.map(function (route) {
            return <Route path={route.path} component={route.component} key={route.path}/>;
          }) }
          <Route path="*" component={Error404}/>
        </Route>
        <Route path="*" component={Error404}/>
      </Router>
    </Provider>;

// Render
ReactDOM.render(router, document.getElementById('main'));


//import Form from "react-jsonschema-form";
//
//const formSchema = {
//  title: "Todo",
//  type: "object",
//  required: ["title"],
//  properties: {
//    title: {type: "string", title: "Title", default: "A new task"},
//    done: {type: "boolean", title: "Done?", default: false}
//  }
//};
//
//const formData = {
//  title: "First task",
//  done: true
//};
//
//const log = (type) => console.log.bind(console, type);
//
//// Required for codemirror styling and mode
//import Codemirror from 'react-codemirror';
//import 'codemirror/lib/codemirror.css';
//import 'codemirror/theme/dracula.css';
//require('codemirror/mode/javascript/javascript');
//
//
//// Grind
//// http://adazzle.github.io/react-data-grid/examples.html#/basic
//
//import ReactDataGrid  from 'react-data-grid/addons';
//
//var _rows = [];
//for (var i = 1; i < 1000; i++) {
//  _rows.push({
//    id: i,
//    title: 'Title ' + i,
//    count: i * 1000
//  });
//}
//
////A rowGetter function is required by the grid to retrieve a row for a given index
//var rowGetter = function(i){
//  return _rows[i];
//};
//
//var columns = [{
//  key: 'id',
//  name: 'ID'
//}, {
//  key: 'title',
//  name: 'Title'
//}, {
//  key: 'count',
//  name: 'Count'
//}]
/*
 <Codemirror value={schema} options={{
 mode: 'javascript',
 lineNumbers: true,
 theme: 'dracula'
 }} />
 <h2>Schema generated form:</h2>
 <Form schema={formSchema}
 formData={formData}
 onChange={log("changed")}
 onSubmit={log("submitted")}
 onError={log("errors")} />
 <ReactDataGrid
 className='grid'
 columns={columns}
 rowGetter={rowGetter}
 rowsCount={_rows.length}
 minHeight={500} />
 * */
