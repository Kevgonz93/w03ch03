/* eslint-disable no-new */
import './styles.css';
import { Main } from './main';
import { Header } from './header';
import { Form } from './form';
import 'https://cdn.jsdelivr.net/npm/uuid@8.3.2/dist/umd/uuidv4.min.js';
import { Petlist } from './petlist';

new Main('body');
new Header('main');
new Form('main');
new Petlist('.petlist');
