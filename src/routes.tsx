import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { LoadingPage } from "./pages/loadingPage";
import { Avatar } from "./pages/avatar";
import { Login } from "./pages/login/login";
import { Panel } from "./pages/panel";
import { ProfileTutor } from "./pages/profileTutor";
import { Repository } from "./pages/repository";
import { Register } from "./pages/register";
import { Scheduling } from "./pages/scheduling";
import { FormScheduling } from "./pages/scheduling/form";
import { Tutors } from "./pages/tutors";
import { Achievements } from "./pages/achievements";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <LoadingPage/>
            },
            {
                path: '/entar',
                element: <Login/>
            },
            {
                path: '/criar-conta',
                element: <Register/>
            },
            {
                path: '/painel',
                element: <Panel/>
            },
            {
                path: '/gerenciar-avatar',
                element: <Avatar/>
            },
            {
                path: '/minhas-conquistas',
                element: <LoadingPage/>
            },
            {
                path: '/tutores',
                element: <Tutors/>
            },
            {
                path: '/perfil-tutor',
                element: <ProfileTutor/>
            },
            {
                path: '/agendamento-tutoria',
                element: <Scheduling/>
            },
            {
                path: '/agendamento-tutoria-formulario',
                element: <FormScheduling/>
            },
            {
                path: '/repositorio',
                element: <Repository/>
            },
            {
                path: '/minhas-conquistas',
                element: <Achievements/>
            }
        ]
    }
])

export {router}