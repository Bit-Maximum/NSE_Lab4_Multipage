import countries from "../groupdata";
import { DataGrid,
    GridRowsProp,
    GridColDef,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
} from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function GroupGrid() {

    const rows: GridRowsProp = countries;

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 1},
        { field: 'Тип', flex: 0.5},
        { field: 'Страна', flex: 0.5},
        { field: 'Город', flex: 0.5},
        { field: 'Год' },
        { field: 'Высота'},
    ];

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <Box sx={{ flexGrow: 1 }} />
                <GridToolbarExport/>
            </GridToolbarContainer>
        );
    }

    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}

                slots={{
                    toolbar: CustomToolbar,
                }}
                slotProps={{
                    pagination: {
                        rowsPerPageOptions: [ 10, 20, 30, 100 ],
                    }
                }}
            />
        </Container>
    );
}

export default GroupGrid;