
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { Layout } from './Layout';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';


export const App = () => (
    <Admin
        layout={Layout}
        dataProvider={dataProvider}
        authProvider={authProvider}
    >
        <Resource
            name="users" // Defina o nome do recurso como "users" se for o nome da sua rota de API
            list={ListGuesser}
            edit={EditGuesser}
            show={ShowGuesser}
        />
    </Admin>
);

