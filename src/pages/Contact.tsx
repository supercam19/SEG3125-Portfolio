import {UnderConstruction} from "../components/UnderConstruction.tsx";
import {Box} from "@mui/material";

export function Contact() {
    return (
        <Box sx={{
            color: "text.primary",
            bgcolor: "background.paper",
            minWidth: "100vw",
            minHeight: "100vh",
        }}>
            <UnderConstruction />
        </Box>
    );
}