import 'bootstrap/dist/css/bootstrap.min.css';
import ScrumPage from "./pages/ScrumPage";
import styled from "styled-components";
import "./styles.css"
import React, {useState} from "react";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: var(--brand-background-color);
`
function App() {
 const [tasks,setTasks] = useState([{
                id: "1",
                priority: 1,
                status: 3,
                title: "Lavar a cozinha.",
                description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                start_date: "23/05/2022",
                end_date: "22/10/2022"
            }, {
                id: "2",
                priority: 2,
                status: 3,
                title: "Fazer a feira da semana.",
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                start_date: "23/05/2022",
                end_date: "22/10/2022"
            }, {
                id: "3",
                priority: 3,
                status: 3,
                title: "Comprar um caderno para faculdade.",
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                start_date: "23/05/2022",
                end_date: "22/10/2022"
            }, {
                id:"4",
                priority: 4,
                status: 3,
                title: "Marcar o dentista.",
                description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                start_date: "23/05/2022",
                end_date: "22/10/2022"
            }, {
                id: "5",
                priority: 5,
                status: 2,
                title: "Investir o dinheiro guardado.",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                start_date: "23/05/2022",
                end_date: "22/10/2022"
            }, {
                id: "6",
                priority: 6,
                status: 1,
                title: "Tentar se matricular na academia no dia 28/06.",
                description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                start_date: "23/05/2022",
                end_date: "22/10/2022"
            }, {
                id: "7",
                priority: 7,
                status: 1,
                title: "Ir na farmácia reabastecer estoque.",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                start_date: "23/05/2022",
                end_date: "22/10/2022"
            }, {
                id: "8",
                priority: 8,
                status: 2,
                title: "testando o title gigantesco para ver se vai quebrar a tela inteira.",
                description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                start_date: "23/05/2022",
                end_date: "22/10/2022"
            }])

    return (
            <StyledLayout>
                <ScrumPage tasks={tasks} setTasks={setTasks}/>
            </StyledLayout>
    );
}

export default App;