import Navbar from "../components/Navbar";
import BuildingPage from "./components/BuildingPage";
import {useParams} from "react-router-dom";
import {Container, Typography} from "@mui/material";
import React from "react";

function List() {
    const { id } = useParams();
    if (!id) {
        return (
            <Container maxWidth="lg" sx={{mt: '20px'}}>
                <Typography variant="h4">Запись не найдена😭😭😭</Typography>
            </Container>
        );
    }

    return (
        <div>
            <Navbar active="0"/>
            <BuildingPage building_id={id} />
        </div>
    );
}

export default List;