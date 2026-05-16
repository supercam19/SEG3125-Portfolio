import {Box, Stack, Typography} from "@mui/material";

export function UnderConstruction() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                minHeight: "100vh",
                color: "text.secondary",
            }}
        >
            <Stack direction="column" sx={{ justifyContent: "center" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="icon icon-tabler icons-tabler-outline icon-tabler-barrier-block">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 8a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -7"/>
                    <path d="M7 16v4"/>
                    <path d="M7.5 16l9 -9"/>
                    <path d="M13.5 16l6.5 -6.5"/>
                    <path d="M4 13.5l6.5 -6.5"/>
                    <path d="M17 16v4"/>
                    <path d="M5 20h4"/>
                    <path d="M15 20h4"/>
                    <path d="M17 7v-2"/>
                    <path d="M7 7v-2"/>
                </svg>
                <Typography sx={{fontSize: 24}}>
                    This page is being built.
                </Typography>
            </Stack>
        </Box>
    );
}