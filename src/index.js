import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './container/HomePage';
import Index from './container/Index';
import Main from './container/Main';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, BrowserHistory } from 'react-router';



ReactDOM.render(<Router history={BrowserHistory }>
        <Route path="/" component={HomePage}>
            <IndexRoute component={Index}/>
            <Route path="main" component={Main}/>
        </Route>
        {/*<Route path="/home_page" component={HomePage}>
            <IndexRoute component={PatientList}/>
            <Route path="/main_page(/:type)(/:patient_id)" component={MainBox}/>
        </Route>*/}
    </Router>,
    document.getElementById('root'));
registerServiceWorker();




