import {Box, Stack, Typography, useTheme} from "@mui/material";

export function Home() {
    const theme = useTheme();
    return (
        <Box sx={{
            color: "text.primary",
            bgcolor: "background.paper",
            minWidth: "100vw",
            minHeight: "100vh",
        }}>
            <Box sx={{
                minHeight: "40vh",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                textAlign: "left",
                position: "relative",
                "::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: "url('/splash4.jpg')",
                    imageRendering: "auto",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(10px)",
                    zIndex: 0,
                },
                "::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.35)",
                    backdropFilter: "saturate(180%) brightness(1.1)",
                    zIndex: 1,
                }
            }}>
                <Stack direction="column" sx={{ 
                    maxWidth: "70vw", 
                    position: "relative", 
                    zIndex: 2, 
                    color: "black",
                    width: "80vw",
                }}>
                    <Typography component="h3" variant="h3">
                        Cameron Labelle
                    </Typography>
                    <Typography component="p" align="justify" sx={{ marginLeft: 1 }}>
                        I am a Software Engineering student at the University of Ottawa. I approach design by first understanding the user's requirements, and making low-fidelity wireframes to explore ideas and gather feedback before making large commitments. When building interfaces, I regularly consult experienced designers to ensure I can provide the best experience for users. I value constructive feedback and view iteration as an important part of the design process.
                    </Typography>
                </Stack>
            </Box>
            <Box sx={{ position: "relative", marginTop: "-80px", zIndex: 2 }}>
                <svg
                    viewBox="0 0 1440 80"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "block", width: "100%" }}
                    >
                    <defs>
                        <filter id="wave-shadow" x="-5%" y="-50%" width="110%" height="200%">
                            <feDropShadow dx="0" dy="-12" stdDeviation="6" floodColor="rgba(0,0,0,0.3)" />
                        </filter>
                    </defs>
                    <path
                        d="M0,40 C360,80 1080,-20 1440,40 L1440,80 L0,80 Z"
                        fill={theme.palette.background.paper}
                        filter="url(#wave-shadow)"
                    />
                </svg>
            </Box>
            <Box sx={{ bgcolor: "background.paper", minHeight: "100vh", minWidth: "100%", zIndex: 10, position: "relative" }}>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </Typography>
            </Box>
        </Box>
    );
}