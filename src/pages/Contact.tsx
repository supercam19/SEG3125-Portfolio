import {Box, Button, Divider, Stack, Typography} from "@mui/material";

export function Contact() {
    return (
        <Box sx={{
            color: "text.primary",
            bgcolor: "background.paper",
            minWidth: "100vw",
            minHeight: "100vh",
            display: "flex",
        }}>
            <Stack direction="column" spacing="10px" sx={{
                textAlign: "left",
                marginY: "120px",
                marginX: "20px",
            }}>
                <Typography variant="h3" component="h3">Cameron Labelle</Typography>
                <Divider />
                <Stack direction="row" spacing="10px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="icon icon-tabler icons-tabler-outline icon-tabler-mail" style={{zIndex: 1}}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"/>
                        <path d="M3 7l9 6l9 -6"/>
                    </svg>
                    <Typography variant="h5" component="h5">clabe097@uOttawa.ca</Typography>
                </Stack>
                <Stack direction="row" spacing="10px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="icon icon-tabler icons-tabler-outline icon-tabler-current-location">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
                        <path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"/>
                        <path d="M12 2l0 2"/>
                        <path d="M12 20l0 2"/>
                        <path d="M20 12l2 0"/>
                        <path d="M2 12l2 0"/>
                    </svg>
                    <Typography variant="h5" component="h5">Ottawa, Canada</Typography>
                </Stack>
                <Stack direction="row" spacing="10px">
                    <Button variant="contained">LinkedIn</Button>
                    <Button variant="contained">GitHub</Button>
                </Stack>
            </Stack>
            <object data="/resume.pdf" type="application/pdf">
                <a href="/resume.pdf">Cameron's resume</a>
            </object>
        </Box>
    );
}