import {UnderConstruction} from "../components/UnderConstruction.tsx";
import {Box} from "@mui/material";

export function Projects() {
    return (
        <Box sx={{
            color: "text.primary",
            bgcolor: "background.paper",
            width: "100vw",
            height: "100vh",
            margin: "auto",
        }}>
            <UnderConstruction />
        </Box>
    );
}